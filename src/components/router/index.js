import { createWebHistory, createRouter } from "vue-router";
import store from "@/components/state/store";
import routes from "./routes";
import appConfig from "@/../app.config";

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);

  if (authRequired) {
    // If the user is not authenticated...
    if (!store.getters["auth/loggedIn"]) {
      console.log(store.getters["auth/token"]);
      // Redirect to the login page
      next({ name: "login" });
    } else {
      // Proceed to the route
      next();
    }
  } else {
    return next();
  }
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args);
              reject(new Error("Redirected"));
            } else {
              resolve();
            }
          });
        } else {
          // Otherwise, continue resolving the route.
          resolve();
        }
      });
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return;
  }
  document.title = routeTo.meta.title + " | " + appConfig.title;
  // If we reach this point, continue resolving the route.
  next();
});

export default router;

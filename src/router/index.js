import { createWebHistory, createRouter } from "vue-router";
import axios from "axios";
import routes from "./routes";
import appConfig from "../../app.config";

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

  if (!authRequired) return next();

  axios.defaults.headers.common["authorization"] =
    "Bearer " + localStorage.getItem("jwt"); // for all requests
  await axios
    .get("https://api-node.themesbrand.website/profile")
    .then((data) => {
      localStorage.setItem("userdata", JSON.stringify(data.data.user));
      localStorage.setItem("userid", data.data.user._id);
      next();
    })
    .catch(() => {
      next({ name: "login", query: { redirectFrom: routeTo.fullPath } });
    });
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

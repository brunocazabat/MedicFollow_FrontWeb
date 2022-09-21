import { createWebHistory, createRouter } from "vue-router";
import store from "@/components/state/store";

// UNIVERSAL ROUTES
import rteerrors from "./rte-errors.js";
import rtelogin from "./rte-login.js";
import rtelock from "./rte-lock.js";
// USER-SPECIFIC ROUTES ADMIN
import rteadmin from "./user-specific/rte-admin.js";
// USER-SPECIFIC ROUTES MEDIC
import rteorganisation from "./user-specific/rte-organisation.js";
import rtemedecin from "./user-specific/rte-medecin.js";
import rtemedical from "./user-specific/rte-medical.js";

// USER-SPECIFIC ROUTES FAMILLY
import rtepatient from "./user-specific/rte-patient.js";
import rteconfiance from "./user-specific/rte-confiance.js";
import rteproche from "./user-specific/rte-proche.js";

import appConfig from "@/../app.config";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  // TEST
  routes: [
    // UNIVERSAL ROUTES
    ...rteerrors,
    ...rtelogin,
    ...rtelock,
    // ROUTES ADMIN
    ...rteadmin,
    // ROUTES MEDIC
    ...rteorganisation,
    ...rtemedecin,
    ...rtemedical,
    // ROUTES FAMILLY
    ...rtepatient,
    ...rteconfiance,
    ...rteproche,
  ],
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
    if (!store.getters["auth/getisloggedIn"]) {
      // Redirect to the login page
      next({ path: "/login" });
    } else {
      // Proceed to the route
      next();
    }
  } else {
    return next();
  }
});

function rootguard(routeTo, next) {
  if (routeTo.path === "/") {
    if (!store.getters["auth/getisloggedIn"]) {
      next({ path: "/login" });
    } else {
      next({ path: "/" + store.getters["auth/getuserType"] + "/dashboard" });
    }
  }
}

router.beforeResolve(async (routeTo, routeFrom, next) => {
  rootguard(routeTo, next);
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.onceLoggedIn) {
          route.meta.onceLoggedIn(routeTo, routeFrom, (...args) => {
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

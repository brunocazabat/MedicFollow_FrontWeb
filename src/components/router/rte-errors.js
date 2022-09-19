import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  // If the user is already logged in
  if (store.getters["auth/isLocked"]) {
    // Redirect to the home page instead
    next({ path: "/lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  // ROUTES ERROR START
  {
    path: "/maintenance",
    name: "maintenance",
    meta: {
      title: "Maintenance",
      onceLoggedIn,
    },
    component: () => import("@/views/UNIVERSAL/errors-section/maintenance.vue"),
  },
  {
    path: "/500",
    name: "500-error",
    meta: {
      title: "Error 500",
      onceLoggedIn,
    },
    component: () => import("@/views/UNIVERSAL/errors-section/500.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404-error",
    meta: {
      title: "Error 404",
      onceLoggedIn,
    },
    component: () => import("@/views/UNIVERSAL/errors-section/404.vue"),
  },
  // ROUTES ERROR END
];

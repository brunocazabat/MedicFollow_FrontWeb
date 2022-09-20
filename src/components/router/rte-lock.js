import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  // If the user is already logged in
  if (_routeTo.path === "/loading" && store.getters["auth/getuserType"]) {
    // Redirect to the home page instead
    next({ path: "/" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ name: "lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  {
    path: "/lockscreen",
    name: "lockscreen",
    meta: {
      title: "Lock Screen",
      authRequired: true,
    },
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/lockscreen.vue"),
  },
  {
    path: "/loading",
    name: "loading",
    meta: {
      title: "Loading...",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/loading-screen.vue"),
  },
];

import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "organisation" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/organisation/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  // dashboard routes START
  {
    path: "/organisation/dashboard",
    name: "organisation-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/dashboard-section/index.vue"),
  },
  {
    path: "/organisation/suggestions",
    name: "organisation-suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/forms-section/suggest.vue"),
  },
  {
    path: "/organisation/bug-report",
    name: "organisation-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/forms-section/bugreport.vue"),
  },
  {
    path: "/organisation/settings",
    name: "organisation-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/organisation/settings-section/setting.vue"
      ),
  },
];

import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "organisation"
  ) {
    next({ path: "/organisation/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (
    store.getters["auth/getuserType"] === "organisation" ||
    store.getters["auth/getuserType"] === "admin"
  ) {
    // Continue to the login page
    next();
  } else {
    next({ path: "/" });
  }
}

export default [
  // HOME
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
  // MANAGE DOCTORS
  {
    path: "/organisation/manage-doctors",
    name: "organisation-manage-doctors",
    meta: {
      title: "Manage Doctors",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/organisation/managedoctors-section/managedoctors.vue"
      ),
  },
  // SETTINGS
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
  // SUGGESTIONS
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
];

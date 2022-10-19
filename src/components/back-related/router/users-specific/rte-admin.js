import store from "@/components/back-related/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "admin"
  ) {
    next({ path: "/admin/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (store.getters["auth/getuserType"] === "admin") {
    // Continue to the login page
    next();
  } else {
    next({ path: "/" });
  }
}

export default [
  // HOME
  {
    path: "/admin/dashboard",
    name: "admin-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/dashboard-section/index.vue"),
  },
  // MANAGE ORGANIZATIONS
  {
    path: "/admin/manage-orgas",
    name: "admin-manageorganizations",
    meta: {
      title: "Manage Organizations",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/admin/manageorgas-section/manageorgas.vue"
      ),
  },
  // SEE REPORTS
  {
    path: "/admin/see-reports",
    name: "admin-seereportsuggest",
    meta: {
      title: "See Report&Suggest",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/admin/seereportssuggest-section/seereportsuggest.vue"
      ),
  },
  // SETTINGS
  {
    path: "/admin/settings",
    name: "admin-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/settings-section/setting.vue"),
  },
];

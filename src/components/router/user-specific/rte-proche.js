import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "proche"
  ) {
    next({ path: "/proche/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (
    store.getters["auth/getuserType"] === "proche" ||
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
    path: "/proche/dashboard",
    name: "proche-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/dashboard-section/index.vue"),
  },
  // CALENDAR
  {
    path: "/proche/calendar",
    name: "proche-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/calendar-section/calendar.vue"),
  },
  // SETTINGS
  {
    path: "/proche/settings",
    name: "proche-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/settings-section/setting.vue"),
  },
  // SUGGESTIONS
  {
    path: "/proche/bug-report",
    name: "proche-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/forms-section/bugreport.vue"),
  },
];

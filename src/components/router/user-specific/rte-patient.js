import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "patient" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/patient/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  // HOME
  {
    path: "/patient/dashboard",
    name: "patient-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/dashboard-section/index.vue"),
  },
  // CALENDAR
  {
    path: "/patient/calendar",
    name: "patient-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/calendar-section/calendar.vue"),
  },
  // CHAT
  {
    path: "/patient/chat",
    name: "patient-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/chat-section/chat.vue"),
  },
  // SETTINGS
  {
    path: "/patient/settings",
    name: "patient-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/settings-section/setting.vue"),
  },
  // SUGGESTIONS
  {
    path: "/patient/suggestions",
    name: "patient-suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/forms-section/suggest.vue"),
  },
  {
    path: "/patient/bug-report",
    name: "patient-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/forms-section/bugreport.vue"),
  },
];

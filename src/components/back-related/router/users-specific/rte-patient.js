import store from "@/components/back-related/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "patient"
  ) {
    next({ path: "/patient/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (
    store.getters["auth/getuserType"] === "patient" ||
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
  // MEDICAL INFO
  {
    path: "/patient/medical-information",
    name: "patient-medical-information",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/patient/medical-information/index.vue"),
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

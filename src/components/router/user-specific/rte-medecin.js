import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "medecin" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/medecin/dashboard" });
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
    path: "/medecin/dashboard",
    name: "medecin-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/dashboard-section/index.vue"),
  },
  {
    path: "/medecin/calendar",
    name: "medecin-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/calendar-section/calendar.vue"),
  },
  {
    path: "/medecin/chat",
    name: "medecin-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/chat-section/chat.vue"),
  },
  {
    path: "/medecin/suggestions",
    name: "medecin-suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/forms-section/suggest.vue"),
  },
  {
    path: "/medecin/bug-report",
    name: "medecin-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/forms-section/bugreport.vue"),
  },
  {
    path: "/medecin/medical-information",
    name: "medecin-medical-information",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/medical-information/index.vue"),
  },
  {
    path: "/medecin/staff-input",
    name: "medecin-staff-input",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/staff-input/index.vue"),
  },
  {
    path: "/medecin/settings",
    name: "medecin-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/settings-section/setting.vue"),
  },
];

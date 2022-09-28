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
  // HOME
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
  // MEDICAL INFO
  {
    path: "/medecin/medical-information",
    name: "medecin-medical-information",
    meta: {
      title: "Medical Information",
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
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medecin/staff-input/index.vue"),
  },
  // MANAGE PATIENTS
  {
    path: "/medecin/manage-patients",
    name: "medecin-manage-patients",
    meta: {
      title: "Manage Patients",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/medecin/managepatients-section/managepatients.vue"
      ),
  },
  // CALENDAR
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
  // CHAT
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
  // SETTINGS
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
  // SUGGESTIONS
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
  // SCHEDULE SETTING
  {
    path: "/medecin/schedule-settings",
    name: "medecin-schedulesettings",
    meta: {
      title: "Schedule Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/medecin/settings-section/schedule-settings.vue"
      ),
  },
];

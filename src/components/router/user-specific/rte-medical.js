import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "medical" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/medical/dashboard" });
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
    path: "/medical/dashboard",
    name: "medical-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/dashboard-section/index.vue"),
  },
  // MEDICAL INFO
  {
    path: "/medical/medical-information",
    name: "medical-medical-information",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/medical-information/index.vue"),
  },
  {
    path: "/medical/staff-input",
    name: "medical-staff-input",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/staff-input/index.vue"),
  },
  // MANAGE PATIENTS
  {
    path: "/medical/manage-patients",
    name: "medical-manage-patients",
    meta: {
      title: "Manage Patients",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/medical/managepatients-section/managepatients.vue"
      ),
  },
  // CALENDAR
  {
    path: "/medical/calendar",
    name: "medical-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/calendar-section/calendar.vue"),
  },
  // CHAT
  {
    path: "/medical/chat",
    name: "medical-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/chat-section/chat.vue"),
  },
  // SETTINGS
  {
    path: "/medical/settings",
    name: "medical-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/settings-section/setting.vue"),
  },
  // SUGGESTIONS
  {
    path: "/medical/suggestions",
    name: "medical-suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/forms-section/suggest.vue"),
  },
  {
    path: "/medical/bug-report",
    name: "medical-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/medical/forms-section/bugreport.vue"),
  },
];

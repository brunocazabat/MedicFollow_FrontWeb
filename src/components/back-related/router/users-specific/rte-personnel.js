import store from "@/components/back-related/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "personnel"
  ) {
    next({ path: "/personnel/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (
    store.getters["auth/getuserType"] === "personnel" ||
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
    path: "/personnel/dashboard",
    name: "personnel-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/dashboard-section/index.vue"),
  },
  // MEDICAL INFO
  {
    path: "/personnel/medical-information",
    name: "personnel-medical-information",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/medical-information/index.vue"),
  },
  {
    path: "/personnel/staff-input",
    name: "personnel-staff-input",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/staff-input/index.vue"),
  },
  // MANAGE PATIENTS
  {
    path: "/personnel/manage-patients",
    name: "personnel-manage-patients",
    meta: {
      title: "Manage Patients",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/personnel/managepatients-section/managepatients.vue"
      ),
  },
  // CALENDAR
  {
    path: "/personnel/calendar",
    name: "personnel-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/calendar-section/calendar.vue"),
  },
  // CHAT
  {
    path: "/personnel/chat",
    name: "personnel-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/chat-section/chat.vue"),
  },
  // SETTINGS
  {
    path: "/personnel/settings",
    name: "personnel-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/settings-section/setting.vue"),
  },
  // SUGGESTIONS
  {
    path: "/personnel/bug-report",
    name: "personnel-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/personnel/forms-section/bugreport.vue"),
  },
];

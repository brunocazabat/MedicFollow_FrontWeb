import store from "@/components/back-related/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    store.getters["auth/getuserType"] === "docteur"
  ) {
    next({ path: "/docteur/dashboard" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else if (
    store.getters["auth/getuserType"] === "docteur" ||
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
    path: "/docteur/dashboard",
    name: "docteur-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/dashboard-section/index.vue"),
  },
  // MEDICAL INFO
  {
    path: "/docteur/medical-information",
    name: "docteur-medical-information",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/medical-information/index.vue"),
  },
  {
    path: "/docteur/staff-input",
    name: "docteur-staff-input",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/staff-input/index.vue"),
  },
  // MANAGE PATIENTS
  {
    path: "/docteur/manage-patients",
    name: "docteur-manage-patients",
    meta: {
      title: "Manage Patients",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/docteur/managepatients-section/managepatients.vue"
      ),
  },
  // CALENDAR
  {
    path: "/docteur/calendar",
    name: "docteur-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/calendar-section/calendar.vue"),
  },
  // CHAT
  {
    path: "/docteur/chat",
    name: "docteur-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/chat-section/chat.vue"),
  },
  // SETTINGS
  {
    path: "/docteur/settings",
    name: "docteur-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/settings-section/setting.vue"),
  },
  // SUGGESTIONS
  {
    path: "/docteur/bug-report",
    name: "docteur-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/docteur/forms-section/bugreport.vue"),
  },
  // SCHEDULE SETTING
  {
    path: "/docteur/schedule-settings",
    name: "docteur-schedulesettings",
    meta: {
      title: "Schedule Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/docteur/settings-section/schedule-settings.vue"
      ),
  },
];

import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "proche" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/proche/dashboard" });
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
    path: "/proche/dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/dashboard-section/index.vue"),
  },
  {
    path: "/proche/calendar",
    name: "calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/calendar-section/calendar.vue"),
  },
  {
    path: "/proche/chat",
    name: "chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/chat-section/chat.vue"),
  },
  {
    path: "/proche/suggestions",
    name: "suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/forms-section/suggest.vue"),
  },
  {
    path: "/proche/bug-report",
    name: "bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/forms-section/bugreport.vue"),
  },
  {
    path: "/proche/medical-information",
    name: "medical-information",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/medical-information/index.vue"),
  },
  {
    path: "/proche/staff-input",
    name: "staff-input",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/staff-input/index.vue"),
  },
  {
    path: "/proche/settings",
    name: "profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/proche/settings-section/setting.vue"),
  },
];

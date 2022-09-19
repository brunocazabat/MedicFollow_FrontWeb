import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/isloggedIn"] &&
    !store.getters["auth/isLocked"] &&
    store.getters["auth/userType"] === "admin"
  ) {
    next({ path: "/admin/dashboard" });
  } else if (store.getters["auth/isLocked"]) {
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
    path: "/admin/dashboard",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/dashboard-section/index.vue"),
  },
  {
    path: "/admin/calendar",
    name: "calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/calendar-section/calendar.vue"),
  },
  {
    path: "/admin/chat",
    name: "chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/chat-section/chat.vue"),
  },
  {
    path: "/admin/suggestions",
    name: "suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/forms-section/suggest.vue"),
  },
  {
    path: "/admin/bug-report",
    name: "bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/forms-section/bugreport.vue"),
  },
  {
    path: "/admin/medical-information",
    name: "medical-information",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/medical-information/index.vue"),
  },
  {
    path: "/admin/staff-input",
    name: "staff-input",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/staff-input/index.vue"),
  },
  {
    path: "/admin/settings",
    name: "profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/admin/settings-section/setting.vue"),
  },
];

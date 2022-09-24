import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "confiance" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/confiance/dashboard" });
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
    path: "/confiance/dashboard",
    name: "confiance-dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/dashboard-section/index.vue"),
  },
  {
    path: "/confiance/calendar",
    name: "confiance-calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/calendar-section/calendar.vue"),
  },
  {
    path: "/confiance/chat",
    name: "confiance-chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/chat-section/chat.vue"),
  },
  {
    path: "/confiance/suggestions",
    name: "confiance-suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/forms-section/suggest.vue"),
  },
  {
    path: "/confiance/bug-report",
    name: "confiance-bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/forms-section/bugreport.vue"),
  },
  {
    path: "/confiance/settings",
    name: "confiance-profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/confiance/settings-section/setting.vue"),
  },
];

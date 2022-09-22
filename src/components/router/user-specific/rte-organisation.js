import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (
    _routeTo.path === "/" &&
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"] &&
    (store.getters["auth/getuserType"] === "organisation" ||
      store.getters["auth/getuserType"] === "admin")
  ) {
    next({ path: "/organisation/dashboard" });
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
    path: "/organisation/dashboard",
    name: "organisationdashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/dashboard-section/index.vue"),
  },
  {
    path: "/organisation/calendar",
    name: "organisationcalendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/organisation/calendar-section/calendar.vue"
      ),
  },
  {
    path: "/organisation/chat",
    name: "organisationchat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/chat-section/chat.vue"),
  },
  {
    path: "/organisation/suggestions",
    name: "organisationsuggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/forms-section/suggest.vue"),
  },
  {
    path: "/organisation/bug-report",
    name: "organisationbugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/forms-section/bugreport.vue"),
  },
  {
    path: "/organisation/medical-information",
    name: "organisationmedical-information",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/organisation/medical-information/index.vue"
      ),
  },
  {
    path: "/organisation/staff-input",
    name: "organisationstaff-input",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import("@/views/users-specific/organisation/staff-input/index.vue"),
  },
  {
    path: "/organisation/settings",
    name: "organisationprofile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/organisation/settings-section/setting.vue"
      ),
  },
];

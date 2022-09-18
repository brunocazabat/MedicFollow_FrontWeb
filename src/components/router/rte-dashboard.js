import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  if (store.getters["auth/isLocked"]) {
    // Redirect to the lockscreen page instead
    next({ path: "/lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

function defineUserType() {
  /*
  switch (store.getters["auth/userType"]) {
    case "admin":
      return "admin";
    case "organisation":
      return "organisation";
    case "doctor":
      return "doctor";
    case "medical":
      return "medical";
    case "patient":
      return "patient";
    case "confiance":
      return "confiance";
    case "proches":
      return "proches";
    default:
      console.log("User type not defined: " + store.getters["auth/userType"]);
      return null;
  }
  */
  return "admin";
}

export default [
  // dashboard routes START
  {
    path: "/dashboard",
    name: "dashboard ",
    meta: {
      title: "Dashboard",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/dashboard-section/index.vue"
      ),
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: {
      title: "Calendar",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/calendar-section/calendar.vue"
      ),
  },
  {
    path: "/chat",
    name: "chat",
    meta: {
      title: "Chat",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" + defineUserType() + "/chat-section/chat.vue"
      ),
  },
  {
    path: "/suggestions",
    name: "suggestions",
    meta: {
      title: "Suggestions",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/forms-section/suggest.vue"
      ),
  },
  {
    path: "/bug-report",
    name: "bugreport",
    meta: {
      title: "Bug Report",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/forms-section/bugreport.vue"
      ),
  },
  {
    path: "/medical-information",
    name: "medical-information",
    meta: {
      title: "Staff Input",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/medical-information/index.vue"
      ),
  },
  {
    path: "/staff-input",
    name: "staff-input",
    meta: {
      title: "Medical Information",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" + defineUserType() + "/staff-input/index.vue"
      ),
  },
  {
    path: "/settings",
    name: "profile-setting",
    meta: {
      title: "Settings",
      authRequired: true,
      onceLoggedIn,
    },
    component: () =>
      import(
        "@/views/users-specific/" +
          defineUserType() +
          "/settings-section/setting.vue"
      ),
  },
];

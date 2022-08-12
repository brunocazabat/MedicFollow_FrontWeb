import store from "@/components/state/store";

var mode = DevMode();

function DevMode() {
  var id;
  if (process.env.VUE_APP_DEFAULT_AUTH === "DEV") {
    id = false;
  } else {
    id = true;
  }
  return id;
}

function beforeResolve(_routeTo, _routeFrom, next) {
  // If the user is already logged in
  if (store.getters["auth/loggedIn"]) {
    // Redirect to the home page instead
    next({ name: "default" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  // test routes START
  {
    path: "/test",
    name: "test",
    component: () => import("../../views/auth/signup/basic.vue"),
    meta: {
      title: "Test",
      beforeResolve,
    },
  },
  // test routes END
  // log-account-section routes START
  {
    path: "/login",
    name: "login",
    component: () => import("../../views/log-account-section/login.vue"),
    meta: {
      title: "Login",
      beforeResolve,
    },
  },
  {
    path: "/register-mail",
    name: "Register Mail",
    component: () =>
      import("../../views/log-account-section/register-mail.vue"),
    meta: {
      title: "Enter your email",
      beforeResolve,
    },
  },
  {
    path: "/register-fill",
    name: "Register Fill",
    component: () =>
      import("../../views/log-account-section/register-fill.vue"),
    meta: {
      title: "Register your account",
      beforeResolve,
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () =>
      import("../../views/log-account-section/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve,
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../../views/log-account-section/logout.vue"),
    meta: {
      title: "Logout",
      beforeResolve,
    },
  },
  {
    path: "/lockscreen",
    name: "lock-screen-basic",
    meta: {
      title: "Lock Screen",
      authRequired: mode,
    },
    component: () => import("../../views/log-account-section/lockscreen.vue"),
  },
  // log-account-section routes END
  //  routes START
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: mode,
    },
    component: () => import("../../views/dashboard/index"),
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: mode },
    component: () => import("../../views/calendar/index"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: mode },
    component: () => import("../../views/apps/chat"),
  },
  {
    path: "/mailbox",
    name: "mailbox",
    meta: { title: "Mailbox", authRequired: mode },
    component: () => import("../../views/apps/mailbox"),
  },
  {
    path: "/suggestions",
    name: "suggestions",
    meta: { title: "Suggestions", authRequired: mode },
    component: () => import("../../views/forms-section/suggest"),
  },
  {
    path: "/bug-report",
    name: "bugreport",
    meta: { title: "Bug Report", authRequired: mode },
    component: () => import("../../views/forms-section/bugreport"),
  },
  {
    path: "/settings",
    name: "profile-setting",
    meta: { title: "Settings", authRequired: mode },
    component: () => import("../../views/pages/profile/setting"),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: mode },
    component: () => import("../../views/pages/maintenance"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: mode },
    component: () => import("../../views/pages/coming-soon"),
  },
  {
    path: "/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: mode },
    component: () => import("../../views/pages/search-results"),
  },
  {
    path: "/twostep",
    name: "twostep-basic",
    meta: {
      title: "Two Step Auth",
      authRequired: mode,
    },
    component: () => import("../../views/auth/twostep/basic"),
  },
  {
    path: "/500",
    name: "500",
    meta: {
      title: "Error 500",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/500"),
  },
  {
    path: "/404",
    name: "404-cover",
    meta: {
      title: "Error 404",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/404-cover"),
  },
  {
    path: "/offline",
    name: "offline",
    meta: {
      title: "Offline",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/offline"),
  },
];

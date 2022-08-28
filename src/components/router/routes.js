import store from "@/components/state/store";

let mode = DevMode();

function DevMode() {
  let id;
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
    component: () => import("../../views/dashboard-section/index.vue"),
    meta: {
      title: "Test",
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
    name: "register-mail",
    component: () =>
      import("../../views/log-account-section/register-mail.vue"),
    meta: {
      title: "Enter your email",
      beforeResolve,
    },
  },
  {
    path: "/register-mail-success",
    name: "mail-success",
    component: () =>
      import("../../views/log-account-section/register-mail-success.vue"),
    meta: {
      title: "Success",
      beforeResolve,
    },
  },
  {
    path: "/register-fill",
    name: "register-fill",
    component: () =>
      import("../../views/log-account-section/register-fill.vue"),
    meta: {
      title: "Register your account",
      beforeResolve,
    },
  },
  {
    path: "/register-fill-success",
    name: "fill-success",
    component: () =>
      import("../../views/log-account-section/register-fill-success.vue"),
    meta: {
      title: "Success",
      beforeResolve,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () =>
      import("../../views/log-account-section/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve,
    },
  },
  {
    path: "/forgot-password-success",
    name: "forgot-password-success",
    component: () =>
      import("../../views/log-account-section/forgot-password-success.vue"),
    meta: {
      title: "Success",
      beforeResolve,
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../../views/log-account-section/logout.vue"),
    meta: {
      title: "Logout",
      authRequired: mode,
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
    component: () => import("../../views/dashboard-section/index.vue"),
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: mode },
    component: () => import("../../views/calendar-section/calendar.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: mode },
    component: () => import("../../views/chat-section/chat.vue"),
  },
  {
    path: "/suggestions",
    name: "suggestions",
    meta: { title: "Suggestions", authRequired: mode },
    component: () => import("../../views/forms-section/suggest.vue"),
  },
  {
    path: "/bug-report",
    name: "bugreport",
    meta: { title: "Bug Report", authRequired: mode },
    component: () => import("../../views/forms-section/bugreport.vue"),
  },
  {
    path: "/settings",
    name: "profile-setting",
    meta: { title: "Settings", authRequired: mode },
    component: () => import("../../views/settings-section/setting.vue"),
  },
  {
    path: "/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: mode },
    component: () => import("../../views/errors-section/maintenance.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: mode },
    component: () => import("../../views/errors-section/coming-soon.vue"),
  },
  {
    path: "/500",
    name: "500",
    meta: {
      title: "Error 500",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/500.vue"),
  },
  {
    path: "/404",
    name: "404-cover",
    meta: {
      title: "Error 404",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/404-cover.vue"),
  },
  {
    path: "/offline",
    name: "offline",
    meta: {
      title: "Offline",
      authRequired: mode,
    },
    component: () => import("../../views/errors-section/offline.vue"),
  },
];

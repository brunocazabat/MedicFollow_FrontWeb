import store from "@/state/store";

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
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve,
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve,
    },
  },
  {
    path: "/",
    name: "default",
    meta: {
      title: "Dashboard",
      authRequired: mode,
    },
    component: () => import("../views/dashboard/index"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout",
      authRequired: mode,
      Resolve(_routeTo, routeFrom, next) {
        store.dispatch("authfack/logout");
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { ...routeFrom }
        );
      },
    },
    component: () => import("../views/auth/logout/basic"),
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: mode },
    component: () => import("../views/calendar/index"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: mode },
    component: () => import("../views/apps/chat"),
  },
  {
    path: "/mailbox",
    name: "mailbox",
    meta: { title: "Mailbox", authRequired: mode },
    component: () => import("../views/apps/mailbox"),
  },
  {
    path: "/form/layouts",
    name: "Form Layouts",
    meta: { title: "Form Layouts", authRequired: mode },
    component: () => import("../views/forms/layouts"),
  },
  {
    path: "/form/validation",
    name: "Form Validation",
    meta: { title: "Form Validation", authRequired: mode },
    component: () => import("../views/forms/validation"),
  },
  {
    path: "/pages/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: mode },
    component: () => import("../views/pages/profile/setting"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: mode },
    component: () => import("../views/pages/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: mode },
    component: () => import("../views/pages/coming-soon"),
  },
  {
    path: "/pages/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: mode },
    component: () => import("../views/pages/search-results"),
  },
  {
    path: "/auth/lockscreen-basic",
    name: "lock-screen-basic",
    meta: {
      title: "Lock Screen",
      authRequired: mode,
    },
    component: () => import("../views/auth/lockscreen/basic"),
  },
  {
    path: "/auth/twostep-basic",
    name: "twostep-basic",
    meta: {
      title: "Two Step Auth",
      authRequired: mode,
    },
    component: () => import("../views/auth/twostep/basic"),
  },
  {
    path: "/auth/500",
    name: "500",
    meta: {
      title: "Error 500",
      authRequired: mode,
    },
    component: () => import("../views/auth/errors/500"),
  },
  {
    path: "/auth/404-cover",
    name: "404-cover",
    meta: {
      title: "Error 404",
      authRequired: mode,
    },
    component: () => import("../views/auth/errors/404-cover"),
  },
  {
    path: "/auth/offline",
    name: "oflfine",
    meta: {
      title: "Offline",
      authRequired: mode,
    },
    component: () => import("../views/auth/errors/offline"),
  },
];

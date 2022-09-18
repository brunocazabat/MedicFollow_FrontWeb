import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  // If the user is already logged in
  if (!store.getters["auth/isloggedIn"] && !store.getters["auth/isLocked"]) {
    // Redirect to the home page instead
    next({ path: "/" });
  } else if (
    store.getters["auth/isloggedIn"] &&
    store.getters["auth/isLocked"]
  ) {
    // Redirect to the lockscreen page instead
    next({ name: "lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  {
    // Logout is not protected by onceLoggedIn mais par authRequired > pas d'accès si pas connecté
    path: "/logout",
    name: "logout",
    component: () => import("@/views/UNIVERSAL/log-account-section/logout.vue"),
    meta: {
      title: "Logout",
      authRequired: true,
    },
  },
  // log-account-section routes START
  {
    path: "/",
    name: "login",
    component: () => import("@/views/UNIVERSAL/log-account-section/login.vue"),
    meta: {
      title: "Login",
      onceLoggedIn,
    },
  },
  {
    path: "/register-mail",
    name: "register-mail",
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/register-mail.vue"),
    meta: {
      title: "Enter your email",
      onceLoggedIn,
    },
  },
  {
    path: "/register-mail-success",
    name: "mail-success",
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/register-mail-success.vue"),
    meta: {
      title: "Success",
      onceLoggedIn,
    },
  },
  {
    path: "/register-fill",
    name: "register-fill",
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/register-fill.vue"),
    meta: {
      title: "Register your account",
      onceLoggedIn,
    },
  },
  {
    path: "/register-fill-success",
    name: "fill-success",
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/register-fill-success.vue"),
    meta: {
      title: "Success",
      onceLoggedIn,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      onceLoggedIn,
    },
  },
  {
    path: "/forgot-password-success",
    name: "forgot-password-success",
    component: () =>
      import(
        "@/views/UNIVERSAL/log-account-section/forgot-password-success.vue"
      ),
    meta: {
      title: "Success",
      onceLoggedIn,
    },
  },
  // log-account-section routes END
];

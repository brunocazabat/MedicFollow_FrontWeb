import store from "@/components/state/store";

function onceLoggedIn(_routeTo, _routeFrom, next) {
  // If the user is already logged in
  if (
    store.getters["auth/getisloggedIn"] &&
    !store.getters["security/getisLocked"]
  ) {
    // Redirect to the home page instead
    next({ path: "/" });
  } else if (store.getters["security/getisLocked"]) {
    // Redirect to the lockscreen page instead
    next({ name: "lockscreen" });
  } else {
    // Continue to the login page
    next();
  }
}

export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Vitrine",
      authRequired: false,
    },
    component: () => import("@/views/site-vitrine/index.vue"),
  },
  {
    path: "/usage",
    name: "usage",
    meta: {
      title: "Usages",
      authRequired: false,
      onceLoggedIn,
    },
    component: () => import("@/views/site-vitrine/components/usage.vue"),
  },
];

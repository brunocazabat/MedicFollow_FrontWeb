export default [
  {
    path: "/lockscreen",
    name: "lockscreen",
    meta: {
      title: "Lock Screen",
      authRequired: true,
    },
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/lockscreen.vue"),
  },
  {
    path: "/loading",
    name: "loading",
    meta: {
      title: "Loading...",
      authRequired: true,
    },
    component: () =>
      import("@/views/UNIVERSAL/log-account-section/loading-screen.vue"),
  },
];

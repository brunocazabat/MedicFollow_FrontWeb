let mode = localStorage.getItem("routes_mode");

export default [
  {
    path: "/lockscreen",
    name: "lockscreen",
    meta: {
      title: "Lock Screen",
      authRequired: mode,
    },
    component: () => import("@/views/log-account-section/lockscreen.vue"),
  },
];

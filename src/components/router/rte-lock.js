export default [
  {
    path: "/lockscreen",
    name: "lockscreen",
    meta: {
      title: "Lock Screen",
      authRequired: true,
    },
    component: () => import("@/views/log-account-section/lockscreen.vue"),
  },
];

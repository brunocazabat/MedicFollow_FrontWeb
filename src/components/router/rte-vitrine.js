export default [
  {
    path: "/",
    name: "home",
    meta: {
      title: "MedicFollow",
      authRequired: false,
    },
    component: () => import("@/views/site-vitrine/index.vue"),
  },
];

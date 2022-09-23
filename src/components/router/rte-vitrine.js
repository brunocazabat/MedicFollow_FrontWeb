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
  {
    path: "/usage",
    name: "usage",
    meta: {
      title: "Usages",
      authRequired: false,
    },
    component: () => import("@/views/site-vitrine/components/usage.vue"),
  },
];

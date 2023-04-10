const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "application",
        component: () => import("pages/ApplicationPage.vue"),
      },
      {
        path: "syscode",
        component: () => import("pages/SystemCodePage.vue"),
      },
      {
        path: "example",
        component: () => import("pages/tabPageExample.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

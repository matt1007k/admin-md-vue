import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./components/layout/LayoutClient.vue"),
      children: [
        { path: "", component: () => import("./views/client/Home.vue") },
        {
          path: "/about",
          component: () => import("./views/client/About.vue")
        }
      ]
    },
    {
      path: "/admin",
      component: () => import("./components/layout/LayoutAdmin.vue"),
      children: [
        {
          path: "",
          name: "admin",
          component: () => import("./views/admin/Dashboard.vue")
        },
        {
          path: "personas",
          name: "personas",
          component: () => import("./views/admin/Personas.vue")
        }
      ]
    }
  ]
});

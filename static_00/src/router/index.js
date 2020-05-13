import Vue from "vue";
import VueRouter from "vue-router";
import comp00 from "../views/00.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/00",
    name: "00",
    component: comp00
  },
  {
    path: "/01",
    name: "01",
    component: () => import("../views/01.vue")
  },
  {
    path: "/02",
    name: "02",
    component: () => import("../views/02.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

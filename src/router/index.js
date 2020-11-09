import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rangeRules",
    name: "RangeRules",

    component: () =>
      import(/* webpackChunkName: "RangeRules" */ "../views/RangeRules.vue"),
  },
  {
    path: "/documents",
    name: "Documents",

    component: () =>
      import(/* webpackChunkName: "Documents" */ "../views/Documents.vue"),
  },
  {
    path: "/pictures",
    name: "Pictures",

    component: () =>
      import(/* webpackChunkName: "Pictures" */ "../views/Pictures.vue"),
  },
  {
    path: "/links",
    name: "Links",

    component: () =>
      import(/* webpackChunkName: "Links" */ "../views/Links.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

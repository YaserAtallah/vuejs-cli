import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Panel from "../views/Panel.vue";
import notFound from "../views/404.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/404",
    name: "404",
    component: notFound,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: notFound,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

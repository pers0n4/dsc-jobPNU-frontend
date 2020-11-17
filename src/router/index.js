import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signin",
    alias: "/signup",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue")
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () => import("../views/MyPage.vue")
  },
  {
    path: "/board",
    name: "Board",
    component: () => import("../views/Board.vue")
  },
  {
    path: "/create/:contentId?",
    name: "Create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/detail/:contentId",
    name: "Detail",
    component: () => import("../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

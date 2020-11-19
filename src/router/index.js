import Home from "../views/Home.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import Board from "@/components/Board";
import Create from "@/components/Create";
// import Detail from "@/components/Detail";

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
    component: Board
  },
  {
    path: "/create/:contentId?",
    name: "Create",
    component: Create
  },
  {
    path: "/detail/:contentId",
    name: "Detail",
    component: () => import("@/components/Detail")
  },
  {
    path: "/status",
    name: "Status",
    component: () => import("@/views/Status.vue")
  },
  {
    path: "/calender",
    name: "Calender",
    component: () => import("@/views/Calender.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

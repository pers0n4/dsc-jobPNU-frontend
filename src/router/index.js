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
    path: "/",
    name: "Board",
    component: Board
  },
  {
    path: "/",
    name: "Read",
    component: Read
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostsNew.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts",
    name: "postsindex",
    component: PostsIndex,
  },
  {
    path: "/posts/new",
    name: "postsnew",
    component: PostsNew,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

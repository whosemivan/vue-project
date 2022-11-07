import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue';

import Profile from "./components/Profile/index.vue";
import Home from "./components/Home/index.vue";
import Auth from "@/components/Auth";
import Test from "@/components/Test";
import NotFound from "@/components/NotFound";
import DesignerProfile from "@/components/DesignerProfile";

const routes = [
  {path: "/", component: Home},
  {path: "/profile", component: Profile, meta: {
    requiresAuth: true,
  }},
  {path: "/auth", component: Auth, props: {type: "login"}},
  {path: "/signup", component: Auth, props: {type: "signup"}},
  {path: "/change-pwd", component: Auth, props: {type: "pwd"}},
  {path: "/test", component: Test},
  {path: "/test/users/:id", name: 'userProfile', component: DesignerProfile},
  {path: "/:catchAll(.*)", component: NotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const user = localStorage.getItem("user");

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    if (user) {
      next();
    } else {
      next("/auth");
    }
  } else {
    next();
  }
});


createApp(App).use(router).mount('#app');

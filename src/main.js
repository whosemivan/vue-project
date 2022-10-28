import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue';

import Profile from "./components/Profile/index.vue";
import Home from "./components/Home/index.vue";
import Auth from "@/components/Auth";
import Test from "@/components/Test";

const routes = [
  {path: "/", component: Home},
  {path: "/profile", component: Profile},
  {path: "/auth", component: Auth, props: {type: "login"}},
  {path: "/signup", component: Auth, props: {type: "signup"}},
  {path: "/change-pwd", component: Auth, props: {type: "pwd"}},
  {path: "/test", component: Test}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


createApp(App).use(router).mount('#app');

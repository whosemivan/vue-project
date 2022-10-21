import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";
import App from './App.vue';

import Profile from "./components/Profile/index.vue";
import Home from "./components/Home/index.vue";

const routes = [
  {path: "/", component: Home},
  {path: "/profile", component: Profile}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


createApp(App).use(router).mount('#app');

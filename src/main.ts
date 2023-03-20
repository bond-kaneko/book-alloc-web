import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import Test from "./pages/Test.vue";
import UserIndex from "./pages/users/UserIndex.vue";
import {authGuard} from "@auth0/auth0-vue";
import Login from "./pages/Login.vue";
import Logout from "./pages/Logout.vue";
import { createPinia } from 'pinia'
import {auth0} from "./auth0";

const routes = [
    {
        path: '/',
        component: Test
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/users',
        component: UserIndex,
        beforeEnter: authGuard,

    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})



const pinia = createPinia()

createApp(App)
    .use(router)
    .use(auth0)
    .use(pinia)
    .mount('#app')
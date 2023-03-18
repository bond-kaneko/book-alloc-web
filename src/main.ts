import {createApp} from 'vue'
import {createRouter, createWebHistory, useRouter} from "vue-router";
import App from "./App.vue";
import Test from "./pages/Test.vue";
import UserIndex from "./pages/users/UserIndex.vue";
import {authGuard, createAuth0, createAuthGuard} from "@auth0/auth0-vue";
import Login from "./pages/Login.vue";
import Logout from "./pages/Logout.vue";
import Private from "./pages/Private.vue";
import { createPinia } from 'pinia'
import {useAuth0} from "@auth0/auth0-vue";

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
        component: UserIndex
    },
    {
        path: '/private',
        component: Private,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const auth0 = createAuth0({
    domain: "dev-dlgdama3kklr7u3i.us.auth0.com",
    clientId: "TWpTNNtOYRuPIccKBwC5ydXLN0WG71fM",
    authorizationParams: {
        redirect_uri: 'http://localhost:5173/login'
    }
})

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(auth0)
    .use(pinia)
    .mount('#app')
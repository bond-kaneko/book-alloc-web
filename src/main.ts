import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import Test from "./pages/Test.vue";
import UserIndex from "./pages/users/UserIndex.vue";

const routes = [
    {
        path: '/',
        component: Test
    },
    {
        path: '/users',
        component: UserIndex
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
createApp(App)
.use(router)
.mount('#app')
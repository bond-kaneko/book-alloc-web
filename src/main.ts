import {createApp} from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import { createPinia } from 'pinia'
import {auth0} from "./auth0";
import { routes } from './route';


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
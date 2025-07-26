import { createRouter, createWebHistory } from "vue-router";
import home from "./component/homePage/home.vue";
import info from "./component/homePage/info.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component:home },
        {path: '/info', component: info }
    ]
});


export default router;
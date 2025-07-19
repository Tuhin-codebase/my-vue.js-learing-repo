import {createRouter, createWebHistory} from "vue-router";
import header from "@/header/header.vue";
import demo  from "@/demoUseVue/demo.vue";
import contact from "@/header/contact.vue";
import Login from "@/Login/Login.vue";
import noAcc from "@/noAccess/no.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path:'/', component: header, name: 'home' },
        {path: '/demo-us', component: demo, name: "tuhin", beforeEnter:(to ,from) => {
            const isValid = true;
            if(isValid) {
                return {name: 'no-access'}
            };
            return isValid;
        } },
        {path: '/demo', redirect:{name: 'tuhin'}},
        {path: "/contact-some/:contact?", component: contact, name: "contactVue",},
        {path: '/login-Vue', component: Login, name: "Login-vue"},
        {path: '/noAccess', component :noAcc, name: 'no-access' }
    ],
    linkActiveClass:'active btn-primary bg-success '
});

router.beforeEach((to ,from ) => {
    console.log(to.name);
    console.log(from);
    const isLoginIt = true;
    if(to.name == "home") {
        return true;
    }
    if(!isLoginIt && to.name  !== "Login-vue" ){
        return {name: 'Login-vue'}
    };
});

export default router;

import Contact from "@/component/HomePage/Contact.vue";
import HomePage from "@/component/HomePage/HomePage.vue";
import productList from "@/component/ProductList/productList.vue";
import productDatail from "@/component/ProductList/productDatail.vue";
import {createRouter, createWebHistory} from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {path: '/', component: HomePage},
        {path: '/contact-us', component: Contact, name: "contact"},
        {path: '/productList',component:productList },
        {path: '/product', component:productDatail}
    ]
});

export default router;
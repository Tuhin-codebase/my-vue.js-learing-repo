
import { createApp } from 'vue'
import App from './App.vue';
const app  = createApp(App);
app.mount('#app');
import router from './Router/Routes';
app.use(router);
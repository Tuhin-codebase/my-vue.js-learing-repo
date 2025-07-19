
import { createApp } from 'vue';
import App from './App.vue';
import loader from './data/component/loader.vue';
const app = createApp(App);
app.component("loader", loader)
app.mount("#app");

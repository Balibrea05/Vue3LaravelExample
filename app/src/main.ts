import { createApp } from "vue";
import { createPinia } from "pinia";
import infiniteScroll from 'vue-infinite-scroll';

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import {api} from "@/plugins/api";


const app = createApp(App);
const pinia = createPinia();
pinia.use(api);
app.use(pinia);
app.use(infiniteScroll)

app.use(router);

app.mount("#app");

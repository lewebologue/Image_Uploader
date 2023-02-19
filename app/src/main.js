import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Dialog from 'primevue/dialog';

import "./assets/main.css";

const app = createApp(App);

app
.use(createPinia())
.use(PrimeVue);

app.component('Dialog', Dialog);

app.mount("#app");

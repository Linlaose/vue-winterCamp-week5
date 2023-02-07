import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { vue3Debounce } from "vue-debounce";

const app = createApp(App);

app.directive("debounce", vue3Debounce());
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { setLocale } from "@vee-validate/i18n";

setLocale("zh_TW");

const app = createApp(App);

app.mount("#app");

import { createApp } from "vue";

import Myapp from "./App.vue";
import router from "@/components/back-related/router/index.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n.js";
import store from "@/components/back-related/state/store";

import BootstrapVue3 from "bootstrap-vue-3";
import vClickOutside from "click-outside-vue3";
import VueApexCharts from "vue3-apexcharts";
import Maska from "maska";

import VueFeather from "vue-feather";
import Particles from "particles.vue3";

import VueCookies, { globalCookiesConfig } from "vue3-cookies";
globalCookiesConfig({
  expireTimes: "30d",
  path: "/",
  domain: "",
  secure: "",
  sameSite: "None",
});

import VueCookieAcceptDecline from "vue-cookie-accept-decline";
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";

import "@/assets/scss/config/material/app.scss";
import "@vueform/slider/themes/default.css";

import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_BACK_PROD; //EN PRODUCTION
// axios.defaults.baseURL = process.env.VUE_APP_BACK_LOCALDEV; //EN DEV LOCAL

import VueRecaptcha from "vue3-recaptcha-v2";

AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});

createApp(Myapp)
  .use(store)
  .use(router)
  .use(VueApexCharts)
  .use(BootstrapVue3)
  .component(VueFeather.type, VueFeather)
  .component("vue-cookie-accept-decline", VueCookieAcceptDecline)
  .use(VueCookies)
  .use(Maska)
  .use(Particles)
  .use(i18n)
  .use(vClickOutside)
  .use(VueRecaptcha, { siteKey: "6LdU_b0hAAAAAEOY4OZqGD3QfVjuXelZI-DeQhWU" }) // V2 Localhost + Deployed
  .mount("#app");

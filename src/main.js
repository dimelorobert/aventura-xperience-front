import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import dotenv from 'dotenv'
import {
  createDateFilter
} from "vue-date-fns";
import locale from "date-fns/locale/es";



Vue.filter("date", createDateFilter("dd 'de' MMM 'de' yyyy", {
  locale
}));



dotenv.config();

Vue.use(VueAxios, axios)
axios.defaults.baseURL = `http://localhost:3000`;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
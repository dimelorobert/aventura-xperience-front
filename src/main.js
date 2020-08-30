import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Snotify
import Snotify, {
  SnotifyPosition
} from 'vue-snotify'

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options)


// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL = `http://localhost:3000/`

// Dotenv
import dotenv from 'dotenv'
dotenv.config();

// Vue date fns
import {
  createDateFilter
} from "vue-date-fns";
import locale from "date-fns/locale/es";

Vue.filter("date", createDateFilter("dd 'de' MMM 'de' yyyy", {
  locale
}));

// vuelidate validaciones formularios

import Vuelidate from 'vuelidate'

Vue.use(VueAxios, axios, Vuelidate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
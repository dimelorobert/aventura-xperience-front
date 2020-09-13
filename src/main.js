import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require('./plugins')

// Vue countDown
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);

// Vue headful
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);

// Snotify
import Snotify, {
  SnotifyPosition
} from 'vue-snotify'

const options = {
  toast: {
    position: SnotifyPosition.rightTop
  }
}

Vue.use(Snotify, options);

// Swalert
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2/src/sweetalert2.js'

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2, Swal);


// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

const baseURL = `http://localhost:3000`;
axios.defaults.baseURL = baseURL;

// Dotenv
import dotenv from 'dotenv'
dotenv.config();

// Vue date fns
import VueDateFns from "vue-date-fns";
import {
  createDateFilter
} from "vue-date-fns";
import locale from "date-fns/locale/es";

Vue.filter("date", createDateFilter("dd 'de' MMM 'de' yyyy HH:mm:ss", {
  locale
}));

Vue.use(VueDateFns);
// Vue-paginate 
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)



Vue.use(vueHeadful, VueCountdown, store);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
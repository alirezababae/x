import Vue from 'vue'
import App from './App.vue'
import Store from './store'
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue";
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')




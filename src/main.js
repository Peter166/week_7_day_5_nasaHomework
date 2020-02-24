import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

window.axios = require('axios');
Vue.use(VueAxios, axios)

export const eventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

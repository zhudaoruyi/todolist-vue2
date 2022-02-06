import Vue from 'vue'
import App from './App.vue'

import './assets/css/resets.css'
import './assets/css/border.css'
import './assets/css/ui.css'
import './assets/js/common.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

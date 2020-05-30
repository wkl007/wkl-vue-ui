import Vue from 'vue'
import App from './App.vue'

// 全部导入
import WklVueUI from 'wkl-vue-ui'

Vue.use(WklVueUI)

// 按需导入
// import { Button } from 'wkl-vue-ui'
// Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

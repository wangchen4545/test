import Vue from 'vue'
import App from './App.vue'
import toastExtend from './extend/toastExtend'
Vue.use(toastExtend)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

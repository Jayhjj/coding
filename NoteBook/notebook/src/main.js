import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import 'amfe-flexible'
import { Swipe, SwipeItem } from 'vant';
import { Toast } from 'vant';
import axios from 'axios'
import util from './assets/js/util'
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem);
Vue.use(Toast);
Vue.use(axios);

Vue.prototype.$http = axios
Vue.prototype.$util = util
router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

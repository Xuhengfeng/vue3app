import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {axios} from './api/js/axios.js' //axios
import URL from "./api/js/url.js" //全局url
import vfilter from "./api/js/vfilter.js"//全局配置过滤器
// 引入mintui
import { Toast, Header, Button, Swipe, SwipeItem, Indicator, Lazyload, MessageBox } from 'mint-ui'
import "mint-ui/lib/style.css"
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.prototype.loading = Indicator
Vue.prototype.$msg = MessageBox
Vue.prototype.$http = axios;
Vue.prototype.$toast = Toast;
Vue.prototype.$url = URL;
Vue.use(Lazyload)

for (let key in vfilter) {
  Vue.filter(key, vfilter[key])
}

//ios解决键盘挡住输入框指令
Vue.directive('iosinput', {
  inserted: function (el) {
    const oHeight = document.body.clientHeight;
    window.addEventListener('resize', function (params) {
      if (oHeight > document.body.clientHeight) { //键盘弹出
        el.scrollIntoView(false);
      }
    }, false);
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

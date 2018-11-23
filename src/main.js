import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {axios} from './api/js/axios.js' //axios
import URL from "./api/js/url.js" //全局url
import vfilter from "./api/js/vfilter.js"//全局配置过滤器

Vue.prototype.$http = axios;
Vue.prototype.$url = URL;



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

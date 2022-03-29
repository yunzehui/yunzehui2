import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css"
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import myplugin from "./plugins/myplugin"

Vue.config.productionTip = false;
Vue.use(elementUI)
Vue.use(myplugin)
// 拦截ajax
if (process.env.NODE_ENV === "development") {
  require("./mock/index")
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
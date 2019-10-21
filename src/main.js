import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// check usage
// import oleiwa from "oleiwa/index.js"
// import oleiwa from "../dist/oleiwa.es.js"
// console.log(oleiwa)
// Vue.use(oleiwa);

// import helloworld from "../dist/components/helloworld.js"
// const helloworld = require("../dist/components/helloworld.js")
// console.log(helloworld)
// Vue.use(helloworld)

// 按需加载
// console.log(124123123123)
import {helloworld} from "./index.js"
// import {helloworld} from "oleiwa"
Vue.use(helloworld)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

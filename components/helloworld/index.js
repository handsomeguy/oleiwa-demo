import helloworld from "./src/main.vue"

/* istanbul ignore next */
helloworld.install = function(Vue) {
  Vue.component(helloworld.name, helloworld);
};

export default helloworld;
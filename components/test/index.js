import test from "./src/main.vue"

/* istanbul ignore next */
test.install = function(Vue) {
  Vue.component(test.name, test);
};

export default test;
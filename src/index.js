import helloworld from "../components/helloworld/index.js";
import test from "../components/test/index.js";
import { version } from '../package.json';
// import './css.js';
const components = {
    helloworld,
    test
}

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key]);
    })
    install.installed = true;
  };

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    helloworld,
    test
}

export default {
    version,
    install
};
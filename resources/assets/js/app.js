

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'

import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('zh_CN',zh_CN);

// Install the Plugin.
Vue.use(VeeValidate);


Vue.use(VueRouter);

Vue.component('app',App)

 new Vue({
    el: '#app' ,
    router
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import DeviceHome from 'components/device/DeviceHome'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
    path: '/cie/device',
    component: DeviceHome,
    name: 'DeviceHome',
    iconCls: 'el-icon-message',
    children: [
        // { path: '/hello', component: Hello, name: 'hello' },
    ]

}];

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})

router.afterEach(transition => {
    NProgress.done();
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')

router.replace('/cie/device')

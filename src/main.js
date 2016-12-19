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
import 'sweetalert2/dist/sweetalert2.min.css'

import DeviceContainer from 'components/device/DeviceContainer'
import DeviceHome from 'components/device/DeviceHome'
import HostList from 'components/device/host/hostList'
import AboutContainer from 'components/about/AboutContainer'
import DevLog from 'components/about/DevLog'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
    path: '/cie/device',
    component: DeviceContainer,
    name: 'DeviceContainer',
    iconCls: 'el-icon-message',
    indexPath: '/cie/device/deviceHome',
    children: [
        { path: 'deviceHome', fullPath: '/cie/device/deviceHome', component: DeviceHome, name: 'deviceHome' },
        { path: 'hostList', fullPath: '/cie/device/hostList', component: HostList, name: 'hostList' }
    ]
},
{
    path: '/cie/about',
    component: AboutContainer,
    name: 'AboutContainer',
    iconCls: 'el-icon-message',
    indexPath: '/cie/about',
    children: [
        { path: 'devlog', fullPath: '/cie/device/deviceHome', component: DevLog, name: 'devlog' }
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
    components: { App },
    data: {
    }
}).$mount('#app')

router.replace('/cie/device/hostList')

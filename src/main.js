import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入安装路由

import  VueResource from 'vue-resource'
Vue.use(VueResource)
//导入安装vue-resource



import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//按需导入mint-ui中的组件


import './lib/mui/css/mui.min.css'
//导入mui样式
import './lib/mui/css/icons-extra.css'

import router from './router.js'


import app from './App.vue'
//导入App组件





var vm=new Vue({
    el:'#app',

    data:{

    },
    render:c=>c(app),
    router,


})
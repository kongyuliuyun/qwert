import Vue from 'vue'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
//按需导入mint-ui中的组件


import './lib/mui/css/mui.min.css'
//导入mui样式




import app from './App.vue'
//导入App组件





var vm=new Vue({
    el:'#app',

    data:{

    },
    render:c=>c(app)

})
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入安装路由

import Vuex from 'vuex'
Vue.use(Vuex)

//配置vuex
localStorage.getItem('car')||'[]'

import  VueResource from 'vue-resource'
Vue.use(VueResource)
//导入安装vue-resource



import {Header,Swipe, Button,SwipeItem,Switch} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
//按需导入mint-ui中的组件


import './lib/mui/css/mui.min.css'
//导入mui样式
import './lib/mui/css/icons-extra.css'

import router from './router.js'


import app from './App.vue'
//导入App组件


var store=new Vuex.Store({
    state: {
        car: []
    },
    mutations: {
        addToCar(state, goodsinfo) {
            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))

        },
        // removeFormCar(state,id){
        //     state.car.some(item=>{
        //         if(item.id==id){
        //             state.car.splice(1,1)//前面i
        //             return true
        //
        //         }
        //     })
        //     localStorage.setItem('car', JSON.stringify(state.car))
        //
        // },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id){
                    item.selected=info.selected
                }
            })
                localStorage.setItem('car', JSON.stringify(state.car))

        }
    },

    getters: {
        getAllCount(state) {
            var c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }

    }
})
// console.log($store.getters.getAllCount)

var vm=new Vue({
    el:'#app',

    data:{

    },
    render:c=>c(app),
    router,
    store


})
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)//之前一直报错，加入这一行之后解决（之前的项目没有也没有问题）

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
//导入对应的路由组件

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newslist',component:NewsList}

    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮类，默认类router-link-active

})



export default router

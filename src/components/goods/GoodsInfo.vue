<template>
    <div class="goodsinfo-container" >

        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>



        <!--商品轮播图区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../../images/小米.jpg" height="728" width="446"/>
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../images/xiaomi-8.jpg" height="500" width="500"/>
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </div>
        </div>

        <!--商品购买区域-->
        <div class="mui-card">
            <div class="mui-card-header">小米（mi）小米Note 16G双网通版</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价<span class="now-price">￥2199</span>
                    </p>
                    <p>购买数量：<numbox @getcount="getSelectedCount"></numbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <!--<div class="mui-card-footer">页脚</div>-->
        </div>




        <!--商品参数区域-->

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：AFASD541351345</p>
                    <p>库存情况：剩余555件</p>
                    <p>上架时间：2090-2-31</p>

                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc()">图文介绍</mt-button>

                <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
            </div>
        </div>



    </div>
</template>

<script>
    import numbox from '../goods/goodsinfo_numbox.vue'
    //导入数字选择框组件
    export default {
        name: "",
        data(){
          return{
              goodsinfo:[
                  {id:1,name:'小米（mi）小米Note 16G双网通版',price:2199,rest:60,},
                  // {id:2,name:'尼康（Nikon）D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）',price:5199,rest:60,},
                  // {id:3,name:'小米（mi）小米Note 16G双网通版',price:2199,rest:60,},
                  // {id:4,name:'小米（mi）小米Note 16G双网通版',price:2199,rest:60,},
                  // {id:5,name:'小米（mi）小米Note 16G双网通版',price:2199,rest:60,},
              ],
              ballFlag:false,//控制小球隐藏和显示
              selectedCount:1//保存用户选择的商品数量
          }
        },


        methods:{

            // goDetail(id){
            //     $router.push('/home/goodsinfo/'+id)
            // },
            goDesc(){//点击跳转图文介绍界面
                this.$router.push({name:'goodsdesc'})
            },
            goComment(){//点击跳转评论页面
                this.$router.push({name:'goodscomment'})

            },
            addToShopCar(){
                this.ballFlag=!this.ballFlag
                var goodsinfo={
                    id:this.goodsinfo.id,
                    count:this.selectedCount,
                    price:this.goodsinfo.price,
                    selected:true
                }
                this.$store.commit("addToCar",goodsinfo)

                 localStorage.setItem('car',JSON.stringify(state.car))


            },
            beforeEnter(el){
                el.style.transform="translate(0,0)";

            },
            enter(el,done){
                el.offsetWidth;

                const ballPosition=this.$refs.ball.getBoundingClientRect()
                const badgePosition=document.getElementById('badge').getBoundingClientRect()

                const xDist=badgePosition.left-ballPosition.left
                const yDist=badgePosition.top-ballPosition.top

                el.style.transform=`translate(${xDist}px,${yDist}px)`
                el.style.transition='all 0.5s cubic-bezier(.4,-0.3,1,.68'
                done()
            },
            afterEnter(el) {
                this.ballFlag=!this.ballFlag
            },
            getSelectedCount(count){
                this.selectedCount=count
            }
        },
        components:{
            numbox
        }
    }
</script>

<style scoped>
    .goodsinfo-container{
        background-color: #eee;
        overflow:hidden;
    }
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        text-align: center;
    }
    mint-swipe-item,img{
        /*width: 100%;*/
        height: 100%;
        width: auto;
    }

    .now-price{
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
    }
    .mui-card-footer button{
        margin: 10px 0;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index:99;
        top: 390px;
        left: 146px;

    }
</style>
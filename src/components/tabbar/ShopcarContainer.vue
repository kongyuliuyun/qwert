<template>
    <div class="shopcar-container">
        <div class="goods-list">

            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch>
                        </mt-switch>
                        <!--<mt-switch v-model="$store.getters.getGoodsSelected[item.id]"-->
                                   <!--@change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"-->
                        <!--&gt;-->
                        <!--</mt-switch>-->

                        <img :src="item.image"/>
                        <div class="info">
                            <h1>{{item.name}}</h1>
                            <p>
                                <span class="price">$2199</span>
                                <numbox
                                ></numbox>
                                <!--<numbox-->
                                        <!--:initcount="$store.getters.getGoodsCount[item.id]"-->
                                        <!--:goodsid="item.id"-->
                                <!--&gt;</numbox>-->
                                <!--<a href="#" @click.prevent="remove(item.id,i)">删除</a>-->
                                <a href="#">删除</a>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                   <div class="left">
                       <p>总计（不含运费）</p>
                       <p>已勾选商品<span class="red">1</span>件，总价￥<span class="red">0</span></p>
                   </div>
                    <mt-button type="danger">结算</mt-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import numbox from '../subcomponents/shopcar_numbox.vue'
    import mi from '../../images/小米.jpg'
    export default {
        name: "",
        data(){
            return{

                goodslist:[
                    {id:1,name:'小米（mi）小米Note 16G双网通版',price:2199,rest:60,image:mi}
                ]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                var idArr=[];
                this.$store.state.car.forEach(item=>idArr.push(item.id));
                if(idArr.length<=0){
                    return
                }
                // this.$http.get("/api/goodsList"+idArr.join(",")).then(res=>{
                //     if(res.body.status===0){
                //         this.goodslist=res.body;
                //     }
                // })
            },
            // remove(id,index){
            //       this.goodslist.splice(index,1)
            //     this.$store.commit("removeFormCar",id)
            // }
        //     selectedChange(id,value){
        //         this.$store.commit('updateGoodsSelected',{id,selected:val})
        //
        //     }
         },
        components:{
            numbox
        }
    }
</script>

<style scoped>
    .shopcar-container{
        background-color: #eee;
        overflow: hidden;
    }
    .goods-list img{
        width: 60px;
        height: 60px;
    }
    h1{
        font-size: 13px;
    }
.price{
    color: red;
    font-weight: bold;

}
    .mui-card-content-inner{
        display: flex;
        align-items: center;

    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .red{
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
</style>
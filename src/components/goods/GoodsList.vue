 <template>
    <div class="goods-list">
        <router-link class="goods-item" :to="'/home/goodsinfo/'+item.id"
                     tag="div" v-for="item in list" :key="item.id">

            <img :src="item.image" />
            <h1 class="title">{{item.name}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.price}}</span>
                    <span class="old">￥{{item.old}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.rest}}件</span>
                </p>
            </div>
        </router-link>

    </div>
</template>

<script>
    import mi from '../../images/小米.jpg'
    import nikon from '../../images/Nikon.jpg'


    export default {
        name: "",
        data(){
            return{
                list:[
                    {id:1,name:'小米（mi）小米Note 16G双网通版',price:2199,old:2399,rest:60,image:mi},
                    {id:2,name:'尼康（Nikon）D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）',price:5199,old:7999,rest:60,image:nikon},
                    {id:3,name:'小米（mi）小米Note 8G双网通版',price:1899,old:2199,rest:60,image:mi},
                    {id:4,name:'小米（mi）小米Note 32G双网通版',price:2399,old:2599,rest:60,image:mi},
                    {id:5,name:'小米（mi）小米Note 128G双网通版',price:2599,old:2799,rest:60,image:mi},
                ],

            }
        }
    }
    </script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

}
.goods-item{
    width: 49%;
    border: 1px solid #cccccc;
    box-shadow: 0 0 8px #cccccc;
    margin: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

    .goods-item>img{
        width: 100%;
        height: 600px;
    }
    .title{
        font-size: 14px;
    }
    .info{
        background-color: #eee;
    }
    .info>p{
        margin: 0px;
        padding: 5px;
    }
    .now{
        color: red;
        font-weight: bold;
        font-size: 16px;

    }
    .old{
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
    }
    .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
</style>
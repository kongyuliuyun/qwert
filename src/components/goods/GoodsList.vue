 <template>
    <div class="goods-list">
        <router-link class="goods-item" :to="'/home/goodsinfo/'+1" tag="div">
            <img src="../../images/小米.jpg" />
            <h1 class="title">小米（mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </router-link>
        <div class="goods-item">

            <img src="../../images/Nikon.jpg" />
            <h1 class="title">尼康（Nikon）D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/小米.jpg" />
            <h1 class="title">小米（mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60件</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: ""
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
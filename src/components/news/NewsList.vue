<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" >
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/timg.jpg">
                    <div class="mui-media-body">
                        <h1>大众汽车因“尾气门”向德国检方认罚10亿欧元</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-06-14 06:55:53</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>



        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{


            }
        },

        methods:{
            // getNewsList(){
            //     this.$http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1").then(result=>{
            //         if(result.body.status===0){
            //             this.newslist=result.body.message()
            //         }
            //     })
            // }



                },


    }
</script>

<style scoped>
.mui-table-view,li,h1{
    font-size: 14px;
}
.mui-ellipsis{
    font-size: 12px;
    color: #007aff;
    display: flex;
    justify-content: space-between;
}
</style>
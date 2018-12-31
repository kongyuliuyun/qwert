<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/timg.jpg"/>
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/1.png"/></mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/2.gif"/></mt-swipe-item>
        </mt-swipe>
       <!--<button @click="created()">click</button>-->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                <span class="mui-icon mui-icon-map"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-image"></span>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-plus"></span>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-chat"></span>
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-videocam"></span>
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>


    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
              lunbotulist:[]
            }
        },

        methods:{

        }
    }
</script>

<style scoped>
.mint-swipe{
     height: 200px;
}
.mint-swipe-item:nth-child(1){
    background-color: aqua;
}
.mint-swipe-item:nth-child(2){
    background-color: yellowgreen;
}
.mint-swipe-item:nth-child(3){
    background-color: gold;
}
mint-swipe-item,img{
    width: 100%;
    height: 100%;
}



.mui-grid-view.mui-grid-9{
    background-color: white;
    border: 0px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}


</style>
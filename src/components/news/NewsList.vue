<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/timg.jpg">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-12-31 11:11:11</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>



        </ul>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{
                list:[],

            }
        },
        created(){
            this.getList()
        },
        methods:{
            // getNewsList(){
            //     this.$http.get("http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1").then(result=>{
            //         if(result.body.status===0){
            //             this.newslist=result.body.message()
            //         }
            //     })
            // }

           getList(){

                this.$http.get("https://www.apiopen.top/journalismApi").then((result) => {

                    this.list =result.data;
                    this.list=this.list.data
                    this.list=this.list.auto
                    //不这么多分几步赋值不到

                },function (err) {
                    console.log(err);
                })
            }

        }
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
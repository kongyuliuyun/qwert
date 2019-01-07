<template>
    <div>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" >
                        <!--v-for="item in cates" :key="item.cid"-->
                        <!--{{item.title}}-->
                    </a>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import mui from '../../lib/mui/js/mui.min'

    export default {
        name: "",
        data(){
            return{
                 cates:[]
            }  // created(){
            //     this.getPhotoList
            // },
        },

        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getPhotoList(){

                this.$http.get("https://api.apiopen.top/musicBroadcasting").then((result) => {

                    if(result.body.status===0){
                        // this.body.message.unshift({title:'全部',cid:'0'});
                        this.cates =result.data;
                        this.cates =this.cates.result
                    }

                })
            }

        }
    }
</script>

<style scoped>
    * { touch-action: pan-y; }
</style>
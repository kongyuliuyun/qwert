<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height: 25px">

        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min'
    export default {
        name: "",

        mounted(){
            mui(".mui-numbox").numbox();

        },
        methods:{
            countChanged(){
                // this.$emit('getcount',parseInt(this.$refs.numbox.value))
                this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value
                })

            }
        },
        props:["initcount",'goodsid']
    }
</script>

<style scoped>

</style>
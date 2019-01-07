<template>
    <div class="newsinfo-container">
        <h3 class="title">大众汽车因“尾气门”向德国检方认罚10亿欧元</h3>
        <p class="subtitle">
            <span>发表时间：2018-06-14 06:55:53</span>
            <span>点击次数：0次</span>
        </p>
        <hr/>

        <div class="content">
            <p>　　中新社柏林6月13日电 针对大众汽车引发的“尾气门”事件，德国布伦瑞克检方13日对该公司作出了10亿欧元的罚款令。大众汽车集团当天表示认罚，并承担相应的责任。</p>
            <p>　　德国布伦瑞克检方13日公布了针对大众汽车的处罚令。处罚令依据德国《违反秩序法》，针对大众汽车在此前曝出的柴油排放危机事件(“尾气门”事件)中的行为开出了总额为10亿欧元的罚款。</p>
            <p>　　大众汽车集团13日在一份声明中表示，根据布伦瑞克检方获得的调查结果，从2007年年中至2015年，大众汽车分别向美国和加拿大市场投放了配备有EA288(Gen3)型柴油引擎的汽车和向全球市场投放配备EA189型柴油引擎的汽车，共涉及汽车1070万辆。</p>
            <p>　　大众方面表示，经过全面审查，该企业选择接受布伦瑞克检方的处罚，并将放弃上诉。大众方面称，其认罚的行为是在承认其对于“尾气门”所担负的责任，并将认罚视作克服“尾气门”影响向前迈出的又一大步。</p>
            <p>　　大众方面表示，通过认缴罚金，针对其触及德国《违反秩序法》的调查将最终宣告结束。</p>
            <p>　　“尾气门”事件始于美国环保署于2015年9月查出德国规模最大的车企大众汽车涉嫌在车载电脑中安装一种可用于尾气测试作弊的软件，从而隐瞒真实排放情况。美国环保署据此指控大众在美出售的多款车型违反美国《清洁空气法》。随后，时任大众CEO文德恩引咎辞职。</p>
            <p>　　据德媒报道，在此次认罚之前，大众已在美国被要求支付超过150亿美元的罚金。(完)</p></p>

        </div>
        <comment></comment>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "",
        data(){
            return{
                // id:this.$router.params.id
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped>
.newsinfo-container{
    padding: 0 4px;

}
    .newsinfo-container .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color:red;
    }
.newsinfo-container .subtitle{
    color: aqua;
    display:flex ;
    justify-content: space-between;
}
</style>
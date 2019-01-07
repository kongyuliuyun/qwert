<template>
    <div class="cmt-container">
        <h3>发表评论：</h3>
        <hr/>
        <textarea placeholder="请输入评论内容(最多120字)" maxlength="120"  v-model="content" >

        </textarea>
        <mt-button type="primary" size="large" @click="add()">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="item in list" :key="item.ctime">
                <div class="cmt-title" v-once>
                    第{{flo}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间：{{item.ctime|dateFormat('')}}
                </div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'


    export default {
        name: "",
        data(){
            return{
                list:[
                    {user:'haha',ctime:Date.now(),content:'ok！'},
                ],
                content:'',
                flo:'1'



            }
        },

        methods:{

            add(){
                if(this.content===''){
                    Toast("请输入内容")

                }else {
                    this.list.push({user: '匿名用户', ctime: Date.now(), content: this.content})
                    //添加完成后清空输入框
                    this.flo++
                    this.content=''
                }
            },
            getMore(){
                Toast("加载完毕")
            }

        },
        filters:{//定义私有过滤器,过滤器有两个条件[过滤器名称和处理函数]
            dateFormat:function(dateStr,pattern){
                var dt=new Date(dateStr)
                var y=dt.getFullYear()
                var m=dt.getMonth()+1
                var d=dt.getDate()
                if(pattern.toLowerCase()==='yyyy-mm-dd'){
                    return `${y}-${m}-${d}`}
                else{
                    var hh=dt.getHours().toString().padStart(2,'0')
                    var mm=dt.getMinutes().toString().padStart(2,'0')
                    var ss=dt.getSeconds().toString().padStart(2,'0')
                    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
                }
            }
        },
    }
</script>

<style scoped>
.cmt-container h3{
    font-size: 18px;
}
.cmt-container textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list{
    margin: 10px 0;
}
.cmt-item{
    font-size: 13px;
}
    .cmt-title{
        line-height: 30px;
        background-color: #ccc;
    }
    .cmt-body{
        line-height: 35px;
        text-indent: 2em;
    }
</style>
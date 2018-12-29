const path=require('path')
const webpack=require('webpack')//启用热更新 第二步
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/lib/plugin')//vue-loader配置
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
     path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
    },
    plugins: [

        new htmlWebpackPlugin({//在index.html中自动导入bundle.js文件
            template: path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()//vue-loader配置

    ],
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=4690&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude: /node_modules/ },
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve: {
        alias:{
            'vue$':'vue/dist/vue.js'//导入vue完整包
        }
    }


}


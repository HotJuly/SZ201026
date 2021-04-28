const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
    cache
        强缓存  max-Age:360000000
            当准备请求某项资源的时候,会先检测当前硬盘中是否存有该资源,如果有该资源而且没超过最大限制时间,
            那么直接使用该资源,不再进行请求(状态码:200)
        协商缓存    etag="hash值"和last-modified=最后修改时间
            当需要某项资源的时候,会发送请求到服务器,请求头中会携带上次请求的etag和last-modified,服务器比较
            传过去的参数和服务器上该文件的参数,如果都相同就返回响应(状态码:304)
        思考:浏览器如何判断这次请求的资源,之前是否有请求过?
        答案:根据文件名称
        实现:
            1.使用hash值作为名称
                弊端:hash值是每次构建的唯一标识
            2.使用chunkhash值作为名称
                弊端:chunkhash值是每次构建中每个入口文件的唯一标识
            2.使用contenthash值作为名称
                contenthash值是每次构建中每个文件的唯一标识
                问题:如果后续使用import()引入的文件,内容发生变化,无论当前文件是否有修改,都会重新打包
                解决:
                    optimization: {
                        runtimeChunk: {
                            name: entrypoint => `runtime~${entrypoint.name}`
                        }
                    }
                问题:如何给懒加载的文件取名
                解决:在引入的时候添加注释webpackChunkName:'lodash'
    

*/

module.exports={
    // 入口信息
    entry:"./src/main.js",
    // 出口信息
    output:{
        path:resolve(__dirname,"./server/build"),
        filename:"[name].[contenthash].js"
    },
    // loader,解析器中间件
    // loader和plugins的区别
    // loader没有解析代码的能力,他是作为解析器和webpack之前的桥梁,例如less和less-loader
    // plugins一般是做一些loader做不到的事,也就是某些特定功能,例如:将打包结束的js文件自动引入到页面中
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    // plugins,插件
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].[contenthash].css"
        })
    ],
    // mode,配置打包模式
    mode:"development",
    devServer:{
        // proxy:'http://localhost:3000'
        proxy:{
            '/v2/api':{
                target:"http://localhost:3000",
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        // hot:true
        // 热模替换
        hotOnly:true
    },
    resolve:{
        alias:{
            "@":resolve(__dirname,"./src")
        },
        extensions:[".js",".json",".jsx",".vue"]
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      }
    }
}
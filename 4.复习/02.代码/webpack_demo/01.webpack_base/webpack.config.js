const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    // 入口信息
    entry:"./src/main.js",
    // 出口信息
    output:{
        path:resolve(__dirname,"./build"),
        filename:"[name].js"
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
                    "style-loader",
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
    }
}
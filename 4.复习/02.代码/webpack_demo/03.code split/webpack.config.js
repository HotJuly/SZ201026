const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
    code split
    问题:A模块和B模块,同时依赖于一个文件,但是打包的时候,两个模块都会携带上该文件的内容
    实现:
        1.多入口文件配置
            optimization->splitChunks->chunks:"all"实现公共代码切割
            问题:如果共同文件体积较小无法切割
            解决:设置最小分包体积minSize
        2.单入口文件配置(组件懒加载)
            只需要将想要分割出来的代码,使用import函数引入,webpack解析到此处,会将当前文件单独切割出一个js
            好处:首屏渲染的时候,js包体积减小,提高首屏渲染速度
            坏处:如果去渲染经过组件懒加载的组件,需要先发送http请求获取该组件的js文件,会降低该组件的渲染速度
*/

module.exports={
    // 入口信息
    entry:{
        "main":"./src/main.js",
        "home":"./src/home.js"
    },
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
    },
    optimization:{
        splitChunks:{
            chunks:"all",
            minSize:1
        }
    }
}
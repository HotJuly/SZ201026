import Vue from 'vue'
import install from './install';

function deepMapRoutes(routes){
    //用处:将routes数组进行扁平化处理
    // 使用call强行指定当前this为mapRoutes对象
    routes.forEach(route => {
        this[route.path] = route.component;
        if(route.children instanceof Array && route.children.length){
            deepMapRoutes.call(this,route.children);
        }
    });
}

class MyRouter{
    constructor(options){
        this.$options = options;

        /*
            routes:[
                {
                    path:"/home",
                    component:Home
                },
                {
                    path:"/about",
                    component:About,
                    children:[
                        {
                            path:"/about/xixi",
                            component:Xixi
                        }   
                    ]
                }
            ]
        需要转换成对象形式:
        {
            "/home":Home,
            "/about":About,
            "/about/xixi":Xixi
        }
        obj["/about/xixi"]
        
        */
        this.routes = options.routes;

        this.mapRoutes = {};

        this.histroy = window.history;

        deepMapRoutes.call(this.mapRoutes,this.routes);

        Vue.prototype.$router = this;

        Vue.prototype.$route = Vue.observable({
            path:window.location.pathname
        })
        console.log('path',window.location.pathname)
        // console.log(this)
    }

    push(path){
        this.histroy.pushState({},"",path);
        Vue.prototype.$route.path=path;
    }
}
MyRouter.install=install;

export default MyRouter
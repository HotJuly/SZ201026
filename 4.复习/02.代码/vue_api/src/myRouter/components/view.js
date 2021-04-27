import Vue from 'vue';
let view = {
    functional: true,
    render:function (_,{parent,children,data,props}) {
        //获取父组件的渲染方法
        let createElement = parent.$createElement;
        data.$routerView = true;

        //获取到当前的路由路径
        // path->/about/xixi
        // console.log(Vue.prototype.$route)
        let path = Vue.prototype.$route.path;

        let paths = Object.keys(Vue.prototype.$router.mapRoutes).filter((url)=>{
            return path.includes(url)
        })

        let depth = 0;
        while(parent&&parent.$routerRoot!=false){
            let VNodeData = parent.$vnode?parent.$vnode.data:{};
            if(VNodeData.$routerView){
                depth++;
            }
            parent=parent.$parent;
        }
        // console.log('paths',paths,parent)

        //通过路径查找到对应的路由组件
        let component = Vue.prototype.$router.mapRoutes[paths[depth]];

        //返回生成的虚拟DOM,用于渲染
        return createElement(component,data);
    }
}
export default view
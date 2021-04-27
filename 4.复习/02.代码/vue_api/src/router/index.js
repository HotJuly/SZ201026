import Vue from 'vue';
import MyRouter from '../myRouter';
import Home from '../components/Home';
import About from '../components/About';
import Xixi from '../components/Xixi';

Vue.use(MyRouter);

export default new MyRouter({
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
})
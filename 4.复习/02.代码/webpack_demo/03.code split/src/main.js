import "@/index.less";
// import * as lodash from '@/lodash';
import jQuery from 'jquery';
console.log(jQuery)
document.write('hello webpack!!');

document.querySelector('#app').addEventListener('click',function(){
    import('@/lodash').then((module)=>{
        console.log("lodash",module)
    })
})
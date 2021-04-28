import "@/index.less";
document.write('hello webpack!!');
document.querySelector('#app').addEventListener('click',function(){
    import(/* webpackChunkName:'lodash' */'@/lodash').then((module)=>{
        console.log("lodash",module)
    })
})
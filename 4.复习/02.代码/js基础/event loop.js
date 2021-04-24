const fs =require('fs');

fs.readFile("./01原型.html",function(){
    // console.log('readFile')
    setTimeout(()=>{
        console.log('setTimeout')
    },0);
    
    setImmediate(()=>{
        console.log('setImmediate')
    })
    
})
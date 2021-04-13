(function(){
    // 具名函数声明
    function A(a:number=2,b?:number) :number {
        return a+b;
    }

    //函数表达式
    var a1  = function(a:number,b:number) :number{
        return a+b;
    }

    var a2 :(a:number,b:number)=>number  = function(a,b){
        return a+b;
    }

    var a3 :(a:number,b:number)=>number  = 
    function(a:number,b:number) :number{
        return a+b;
    }

    console.log(A(1))
    console.log(A())


    
    function B(a:number,b:number,...c:number[]) :number {
        return a+b;
    }
    B(1,2,3,4,5)
})();

(function(){
    /*
        当前函数接受两个参数
        如果两个都是string,就进行拼接并返回
        如果两个都是number,就相减并返回
    */
    function C(value1 :number,value2 :number):number
    function C(value1 :string,value2 :string):string
    function C(value1,value2){

        if(typeof value1 ==="string"&&typeof value2 ==="string"){
            return value1+value2
        }

        if(typeof value1 ==="number"&&typeof value2 ==="number"){
            return value1-value2
        }
    }

    console.log(C('hello'," world"));
    console.log(C(8,6));
    console.log(C("8aaa",6));

})();
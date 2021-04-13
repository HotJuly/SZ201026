let flag :boolean = true
// flag=123;

let str :string ="str";
// str = 1;

let num :number =123;

let un :undefined = undefined;
// un=123;

let nu :null = null;

// 在非严格模式下.null和undefined算是所有类型的子类
let num2 :number = undefined;
let num3 :string = null;


//数组声明类型,两种方式
let arr :Array<number> = [1,2,3];
// arr[2]="str";

let arr2 : number[] = [1,2,3];
// arr[2]="str";

// 元组是特殊的数组
let arr3 : [number,string,boolean] = [1,"2",true];
arr3[1]="str";
// console.log(arr3[0].toFixed(2));
// console.log(arr3[1].replace('2','4'));
// console.log(arr3[2].valueOf());
// arr3[3]=undefined;

// 枚举,作为了解
enum City{
    fujian=1,
    shanghai=2,
    beijing=6,
    "北京"
}

let p = {
    name:"xiaoming",
    city:City["shanghai"]
}
// console.log(City)
// console.log(p,City[p.city])

// 数组长度未知,数据类型未知
let arr4 : any[]= [1,2,3,true,undefined,null,"string"];
// arr4[0].

// 在变量上void没用,一般使用在函数的返回值约束上
let v :void = undefined;
let v1 :void = null;

function A() :void{
}

// console.log(A)

let obj2 :object ={}

let a666 :number|string = 123;

function B(value:number|string){
    // 如果这个value是字符串,就返回他的长度length
    // 如果这个value是数字类型,就返回原值
    if((<string>value).length){
        return (value as string).length;
    }else{
        return value;
    }
}

console.log(B("aaabbb"));
// console.log(B(true));

let ccc ;
ccc=1;
ccc="falg";

let ccb = 1;
// ccb = true;
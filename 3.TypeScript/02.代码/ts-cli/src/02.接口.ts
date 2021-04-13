(function(){
    //普通接口
    // 接口中使用readonly可以让某些属性处于只读状态
    // readonly VS const
    // const用于声明常量,readonly只能用于接口内部的属性,说明该属性以后禁止修改
    // 属性之后加?说明,该属性是可选属性

    interface IPerson{
        readonly name : string;
        age : number;
        sex : string;
        phone? : number;
    }
    
    let obj :IPerson = {
        name:"xiaoming",
        age:23,
        sex:"未知"
    };

    obj.phone = 17777777777;
    // obj.name = "xiaoming2";
    // console.log(obj);

    // const a = {name:123};
    // a.name = 234;


    // obj=123;
    // let arr :number[] = [1,2,3];
})();

(function(){
    // 函数接口
    interface IA{
        (a:string,b:number):string
    }

    // function A(a,b) implements IA{
    //     return a + b;
    // }

    let A :IA = function (a,b){
            return a + b;
        }

    console.log(A("1",3));
})();

(function(){
    // 类接口
    interface IPerson{
        name :string;
        age :number;
        phone :number;
        say: (text:string)=>string
    }

    interface ISex{
        sex:boolean;
    }

    class Person implements IPerson,ISex{
        name;
        age;
        phone;
        sex;
        constructor(name,age,phone,sex){
            this.name=name;
            this.age=age;
            this.phone=phone;
            this.sex=sex;
        }
        say(text){
            return `我是${text}`
        }
    }

    let p1 = new Person("xiaoming",23,177777777,true);
    console.log(p1.say("小明"))
})();

(function(){
    // 类接口
    interface ISex{
        sex:boolean;
    }

    interface IPerson extends ISex{
        name :string;
        age :number;
        phone :number;
        say: (text:string)=>string
    }

    class Person implements IPerson{
        name;
        age;
        phone;
        sex;
        constructor(name,age,phone,sex){
            this.name=name;
            this.age=age;
            this.phone=phone;
            this.sex=sex;
        }
        say(text){
            return `我是${text}`
        }
    }

    let p1 = new Person("xiaoming",23,177777777,true);
    console.log(p1.say("小明"))
})()
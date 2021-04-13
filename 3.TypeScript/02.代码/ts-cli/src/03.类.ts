(function(){

    class Person{
        name:string;
        age:number;

        constructor(name,age){
            this.name=name;
            this.age=age;
        }

        say(text:string):void{
            console.log(`大家好,我是${text}`);
        }
    }

    let p1 =new Person('xiaoming',18);


})();

(function(){

    //继承
    // 让子类能够使用到父类的方法

    class Person{
        name:string;
        age:number;

        constructor(name,age){
            this.name=name;
            this.age=age;
        }

        say(text:string):void{
            console.log(`大家好,我是${text}`);
        }
    }

    class Man extends Person{
        name:string;
        age:number;
        price:number;

        constructor(name,age,price){
            // Person.call(this,name,age);
            super(name,age);
            this.price=price;
        }

        addMoney(money:number):void{
            this.price+=money;
        }

        say(text:string):void{
            console.log(`大家好,我是${text},我有${this.price},我对钱没有兴趣`);
        }
    }

    let p1 =new Man('xiaoming',18,100000000000);
    p1.addMoney(1000);
    p1.say("万三千");
    console.log(p1)

})();


(function(){

    /*关键字
        1.公开      public->安全系数最低
            谁都能访问
        2.受保护的  protected->安全系数中等
            只能在当前类和子类中访问
        3.私有      private->安全系数最高
            只能在当前类中访问

        其他关键字
            readonly    ->与接口相似,设置的属性后续不允许修改
            static      ->给class自身添加一个静态属性|方法
    */

    class Person{
        public name:string;
        protected age:number;
        readonly sex :string;

        constructor(name,age,sex){
            this.name=name;
            this.age=age;
            this.sex=sex;
        }

        say(text:string):void{
            console.log(`大家好,我是${text}`);
        }
    }

    class Man extends Person{
        private price:number;

        constructor(name,age,price,sex){
            // Person.call(this,name,age);
            super(name,age,sex);
            this.price=price;
        }

        addMoney(money:number):void{
            this.price+=money;
        }

        say(text:string):void{
            console.log(`大家好,我是${text},我今年${this.age},我有${this.price},我对钱没有兴趣`);
        }
    }

    let p1 =new Man('xiaoming',18,100000000000,'男');
    p1.addMoney(1000);
    p1.say("万三千");
    console.log(p1.name);
    // p1.sex = "女"
    // console.log(p1.price);

})();


(function(){
    class Person {
        firstName: string = 'A'
        lastName: string = 'B'
        get fullName () {
          return this.firstName + '-' + this.lastName
        }
        set fullName (value) {
          const names = value.split('-')
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
      
      const p = new Person()
      console.log(p.fullName)
      
      p.firstName = 'C'
      p.lastName =  'D'
      console.log(p.fullName)
      
      p.fullName = 'E-F'
      console.log(p.firstName, p.lastName)
})();

(function(){

    class Person{
        name:string;
        static age:number;

        constructor(name,age){
            this.name=name;
            Person.age=age;
        }

        say(text:string):void{
            console.log(`大家好,我是${text}`);
        }
    }

    let p1 =new Person('xiaoming',18);
    console.log(p1)
    console.dir(Person)

})();

(function(){
    // 接口约束class中必须具有哪些属性
    // 抽象类可以约束class的同时,还能够提供一些实质性的属性
    abstract class Person{
        abstract say (text):void
        hello(){
            console.log('hello world')
        }
    }
    class Man extends Person{

        say(text){
            console.log(`大家好,我是${text}`);
        }
    }
    let man = new Man();

})();
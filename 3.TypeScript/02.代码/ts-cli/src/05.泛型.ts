(function(){

    //问题:在声明函数的时候,有部分数据类型无法确定,只有在函数调用的时候才能确定
    function createArray(value: any, count: number): any[] {
        const arr: any[] = []
        for (let index = 0; index < count; index++) {
          arr.push(value)
        }
        return arr
    }
      
      const arr1 = createArray(11, 3)
      const arr2 = createArray('aa', 3)

})();

(function(){
    let arr :Array<number> = []

    //解决问题:在声明函数的时候,有部分数据类型无法确定,只有在函数调用的时候才能确定
    // 理解泛型:可以理解为是新的形参
    function createArray<T>(value: T, count: number): T[] {
        const arr: T[] = []
        for (let index = 0; index < count; index++) {
          arr.push(value)
        }
        return arr
    }
      
      const arr1 = createArray<number>(11, 3);
      const arr2 = createArray<string>('aa', 3);

})();

(function(){
    function swap <K, V> (a: K, b: V): [K, V] {
        return [a, b]
    }
    function b(){
        return 1;
    }
    //   const result = swap<string, number>(b(), 123)
      const result = swap<string, number>("aaa", 123)
      console.log(result[0].toUpperCase(), result[1].toFixed())
})();



(function(){
        interface ICRUD<T>{
            data:T[];
            add(user: T): void;
            getById(id: number): T;
        }

        class Student{

        }

      class User {
        id?: number; //id主键自增
        name: string; //姓名
        age: number; //年龄
      
        constructor (name, age) {
          this.name = name
          this.age = age
        }
      }
      
      let count = 0;

      class UserCRUD implements ICRUD<Student>{
        data: User[] = []
        
        add(user: User): void {
          user = {...user, id: count++}
          this.data.push(user)
          console.log('保存user', user.id)
        }
      
        getById(id: number): User {
          return this.data.find(item => item.id===id)
        }
      }
      
      let user1 = new User("xiaoming",19);
      let user2 = new User("xiaohong",20);

      let userCRUD = new UserCRUD();
      userCRUD.add(user1);
      userCRUD.add(user2);
      
      console.log(userCRUD.getById(1));
      
})();

(function(){
    class GenericNumber<T> {
        zeroValue: T
        add: (x: T, y: T) => T
      }
      
      let myGenericNumber = new GenericNumber<number>()
      myGenericNumber.zeroValue = 0
      myGenericNumber.add = function(x, y) {
        return x + y 
      }
      
      let stringNumeric = new GenericNumber<string>()
      stringNumeric.zeroValue = 'abc'
      stringNumeric.add = function(x, y) { 
        return x + y
      }
      
      console.log(stringNumeric.add(stringNumeric.zeroValue, "123"))
})();

(function(){
    interface IT{
        length:number;
    }

    function A<T extends IT>(value:T){
        return value.length
    }
    A<string>("123")
    A<number>(123)
})();
<template>
  <div class="hello">
    <h1>{{ a | myFilter }}</h1>
    <p>{{list}}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    b:Function
  },
  // props:['msg'],
  data(){
    return {
      a:1
    }
  },
  filters:{
    myFilter(value){
      return value===1?"一":value;
    }
  },
  inject:["list"],
  mounted(){
    console.log('mounted',this)
    this.b(this.a)
    // console.log('hello',this.$options._a)
    // console.log(a)

    // this.a=2;
    // console.log('a',this.a);
    // debugger

    // // ????是不是存在一个看不见的nextTick

    // Promise.resolve().then(()=>{
    //   console.log('promise1')
    // })

    // this.$nextTick(()=>{
    //   console.log('$nextTick1')
    // })

    // Promise.resolve().then(()=>{
    //   console.log('promise2')
    // })
    
    // this.$nextTick(()=>{
    //   console.log('$nextTick2')
    // });
    
    // console.log('a+1',this.a+1);
  },
  _a:2
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

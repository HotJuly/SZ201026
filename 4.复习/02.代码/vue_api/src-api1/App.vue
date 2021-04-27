<template>
  <div id="app" class="a2">
    <img alt="Vue logo" @click="handleClick" src="./assets/logo.png">
    <HelloWorld1 msg="Welcome to Your Vue.js App" :b="handleClick"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  components: {
    HelloWorld1:HelloWorld
  },
  data(){
    return {
      list:[1,2,3]
    }
  },
  provide:{
    list:[2,3,4]
  },
  methods:{
    handleClick(data){
    //   console.log(this.$helloInstance)
    //   document.querySelector('#app').appendChild(this.$helloInstance.$el)
    console.log(this,data)
    }
  },
  _a:1
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



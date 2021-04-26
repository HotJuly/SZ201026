<template>
  <div id="app" class="a2">
    <img alt="Vue logo" @click="handleClick" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :b="handleClick"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    HelloWorld
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

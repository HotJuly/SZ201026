<template>
  <div id="app">
    <router-view></router-view>
    <button @click="toAbout">toAbout</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
export default {
  data(){
    return {
      list:[1,2,3,4,5,6]
    }
  },
  methods:{
    add(){
      let len = this.list.length+1;
      this.list.splice(2,0,len);
    },
    toAbout(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
</style>

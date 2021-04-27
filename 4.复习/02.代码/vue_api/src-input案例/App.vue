<template>
  <div id="app">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <label>{{item}}:</label><input type="text" :value="item">
      </li>
    </ul>
    <button @click="add">添加一项</button>
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
    }
  }
}
</script>

<style>
</style>

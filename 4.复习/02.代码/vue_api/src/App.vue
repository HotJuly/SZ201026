<template>
  <div id="app">
    <h1 ref="msg">{{msg}}</h1>
    <!-- <h1 ref="msg" v-pre>{{msg}}</h1> -->

    <!-- v-model实现原理 -->
    <!-- <input type="text" v-model="msg"> -->
    <!-- <input type="text" :value="msg" @input="handleClick"> -->

    <!-- <HelloWorld ref="hello" v-model="msg" @input666="()=>{}" :value1="123" class="helloaaa"/> -->
    <!-- <HelloWorld :value="msg" @input="data=>msg=data"/> -->

    <!-- .sync实现原理 -->
    <!-- <HelloWorld :msg.sync="msg"/> -->
    <!-- <HelloWorld :msg="msg" @update:msg="data=>msg=data"/> -->

      <!-- component组件配合is属性 -->
        <!-- <component :is="A" :msg="msg"></component> -->

        <!-- keep-alive区域 -->
      <!-- <keep-alive include="HelloWorld1"> -->
          <!-- <HelloWorld v-if="a" :msg="msg" @update:msg="data=>msg=data"/> -->
            <!-- <router-view></router-view> -->
      <!-- </keep-alive> -->

          <HelloWorld v-if="a" :msg="msg" @update:msg="data=>msg=data">
            <template v-slot:default>
              我是默认插槽
            </template>
            <template v-slot:header>
              我是Header插槽
            </template>
            <template v-slot:footer="slotScope">
              我是{{slotScope.text}}插槽
            </template>
          </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  components: {
    HelloWorld
  },
  data(){
    return {
      msg:"app",
      A:HelloWorld,
      a:6
    }
  },
  mounted(){
    // console.log(this.$children)hello
    // console.log('msg',this.$refs.msg)
    // console.log('hello',this.$refs.hello)
    console.log('app',this)
  },
  methods:{
    handleClick(event){
      // console.log(event)
      let value = event.target.value;
      this.msg=value;
    }
  }
}
</script>

<style>
</style>

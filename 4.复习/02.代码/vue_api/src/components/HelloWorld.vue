<template>
  <div class="hello" v-show="a">
    hello
    <input type="text" :value="msg" @input="handleInput">
    <!-- <input type="text" :value="msg" @input="handleInput"> -->
    <!-- <A {...$attrs}/> -->
    <slot name="default"></slot>
    <slot name="header"></slot>
    <slot name="footer" text="Footer1"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:1,
      form:{
        name:"xiaoming",
        age:28
      }
    }
  },
  // props:["msg","value","class"],
  props:["msg","value"],
  model:{
    prop:"msg",
    event:"input123123123"
  },
  mounted(){
    // this.$destroy();
    // this.form={};
    // this.form.name="xiaoming";
    // this.$forceUpdate();
    // console.log("props",this.$props)
    // console.log("parent",this.$parent)
    // console.log('attrs',this.$attrs)
    // console.log('listeners',this.$listeners)
  },
  watch:{
    msg(){
      console.log('msg change')
    }
  },
  methods:{
    handleInput(event){
      // console.log('handleInput')
      // this.$emit('input123123123',event.target.value)
      this.$emit('update:msg',event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

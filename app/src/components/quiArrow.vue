<template>
  <span v-on:click="btnClickEvent">{{ msg }}</span>
</template>

<script>
  export default {
    name: 'hello',
    // props是专门用来暴露组件的属性接口
    props: {
      msg: {
        default: '箭头'
      }
    },
    methods: {
      btnClickEvent: function () {
        alert("默认arrow");
        // 父组件监听，子组件触发
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
      }
    }
  }
</script>

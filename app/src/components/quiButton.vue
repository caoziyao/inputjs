<template>
  <!-- v-on:click可以缩写为@click -->
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span >{{ msg }}</span>
  </button>

  <!--<button @click="clickEvent">{{ abd }}-&#45;&#45;abdw {{msg}}</button>-->

</template>

<script>
  export default {
    name: 'hello',
    // props是专门用来暴露组件的属性接口
    props: {
      msg: {
        default: '默认btn'
      }
    },
    methods: {
      btnClickEvent: function () {
        alert("先弹出默认的文案");
        // 父组件监听，子组件触发
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
      }
    }
//    data: function () {
//      return {
//        msg: '下载',
//        abd: 'abc'
//      }
//    }
  }
</script>

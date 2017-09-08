<template>
  <div class="qui-list">
    <span class="list-tips">{{ tipsText }}</span>
    <!--<qui-btn v-on:btnClickEvent="btnClickEvent" :msg=msg class="small"></qui-btn>-->
    <component :is="currentView" v-on:btnClickEvent="clickEvent" :msg=msg class="small"  keep-alive></component>
  </div>
</template>

<script>
  import quiButton from '../components/quiButton.vue'
  import quiArrow from '../components/quiArrow.vue'
  export default{
    props:{
      tipsText: {
        default: '默认的文案'
      },
      msg: {
        default: '默认list'
      },
      currentView: {
        default: 'qui-btn'
      },
    },
    components: {
      'qui-btn': quiButton,
      'qui-arrow': quiArrow
    },
    methods:{
      btnClickEvent: function () {
        alert('点击事件')
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
      },
      clickEvent: function () {
        alert('点击自定义组件')
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
      }

    }
  }
</script>

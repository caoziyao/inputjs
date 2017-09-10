<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn class="small" msg="确定" v-on:btnClickEvent="doSth">
      <!-- slot="icon"对应组件中的 name="icon" -->
      <img slot="icon" src="../assets/logo.png" class="icon">
    </qui-btn>
    <qui-btn v-on:btnClickEvent="doSth2" msg="取消" ></qui-btn>
    <!--<hello-btn class="smallaa"></hello-btn>-->
  </div>
</template>

<script>
  import quiBtns from '../components/quiButton.vue'
  import hello from '../components/Hello.vue'
  export default {
    name: 'pageQuiButton',
    components: {
      'qui-btn': quiBtns,
      'hello-btn': hello
    },
    methods: {
      doSth: function () {
        console.log('abc', this.$)
        //alert('你点击了组件1的click:btnClickEvent')
      },
      doSth2: function () {
        alert('你点击了组件2的click:btnClickEvent')
      }
    }
  }
</script>

<style>
  .icon{
    height: 20px;
    width: 20px;
  }
</style>

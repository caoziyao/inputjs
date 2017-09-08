<template>
  <div id="pageQuiButton">
    <qui-list class="small" msg="确定了"></qui-list>
    <qui-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></qui-list>
    <qui-list v-on:btnClickEvent="test"></qui-list>
    <!-- ref的属性，这个属性代表组件集合 -->
    <qui-list v-on:btnClickEvent="test2" ref="child1" tipsText="最右边是箭头" currentView="qui-arrow"></qui-list>
  </div>
</template>

<script>
  import quiList from '../components/quiList.vue'
  export default {
    name: 'pageQuiNav',
    components: {
      'qui-list': quiList
    },
    methods: {
      test: function () {
        alert('test')
      },
      test2: function () {
        console.log('a', this.$children[0].msg);//通过数组获取
        console.log('b', this.$refs.child1.msg);//通过对象集合获取
      }
    },
    //生命周期
    beforeCreate:function(){},//组件实例化之前
    created:function(){},//组件实例化了
    beforeMount:function(){},//组件写入dom结构之前
    mounted:function(){//组件写入dom结构了
      console.log(this.$children);
      console.log(this.$refs);
    },
    beforeUpdate:function(){},//组件更新前
    updated:function(){},//组件更新比如修改了文案
    beforeDestroy:function(){},//组件销毁之前
    destroyed:function(){}//组件已经销毁
  }
</script>

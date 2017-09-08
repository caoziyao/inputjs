<template>

  <div class="qui-nav nav-type-1">
    <!-- :class写法是缩写，他的全拼应该是v-bind: -->
    <!-- ：class=XXX和class=XXX的区别在于不带冒号的是静态的字符串绑定，带冒号的是动态的变量绑定 -->
    <a v-for="(item, index) in items"
       :class="[commonClass,item.active ? activeClass : '']"
       v-on:click="navClickEvent(items,index)" >
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        commonClass: 'nav-item',
        activeClass: 'active',
        items: [
          {
            text: '首页',
            active: true
          },
          {
            text: '列表',
            active: false
          },
          {
            text: '关于',
            active: false
          },
          {
            text: '招聘',
            active: false
          }
        ]
      }
    },
    methods: {
      navClickEvent: function (items, index) {
        console.log('items', items, index);
        /*默认切换类的动作*/
        items.forEach(function(el){
          el.active = false;
        });
        items[index].active = true;
        /*开放用户自定义的接口*/
        this.$emit('navClickEvent',items,index);
      }
    }

  }
</script>

<style>
  .nav-item{
    margin-left: 20px;
  }
  .active {
    background-color: aqua;
  }
</style>

<template>
  <div id="pageQuiButton">
    <qui-nav class="small"></qui-nav>
    <!--<hello-btn class="smallaa"></hello-btn>-->
  </div>
</template>

<script>
  import quiNav from '../components/quiNav.vue'
  export default {
    name: 'pageQuiNav',
    components: {
      'qui-nav': quiNav
    }
  }
</script>

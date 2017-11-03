<template>
  <div class="container">
    <h1>欢迎{{ $route.params.userName }}进入龙城系统管理后台</h1>
  </div>
</template>
<script>
  export default {
    name: 'Welcome',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .container>h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>

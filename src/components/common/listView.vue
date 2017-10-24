<template>
  <div class="list">
    <ul class="ulele">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ListView',
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .list{
    width: 100%;
  }
  .ulele{
    width: 100%;
    list-style: none;
  }
</style>

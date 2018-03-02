<template>
  <div class="container">
    <h1 v-ac="0">Test AC</h1>
    <div class="content">
      <div>
        <son-one />
      </div>
      <div>
        <son-second />
      </div>
    </div>
  </div>
</template>
<script>
  import Sonone from './sonOne.vue'
  import Sonsecond from './sonSecond.vue'
  export default {
    name: 'Father',
    data () {
      return {}
    },
    mounted () {
      let blob = new Blob()
      console.log(blob)
      let a = this.$ac.add(2, 3)
      console.log('========', a)
    },
    methods: {

    },
    components: {
      'son-one': Sonone,
      'son-second': Sonsecond
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    height: 100%;
  }
  .content{
    width: 100%;
    height: 100%;
    background-color: rgba(238,238,238,.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
  }

</style>

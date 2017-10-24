<template>
  <div id="headerBar">
    <ul class="navBar">
      <li class="linkBox" v-for="(item,idx) in nav" :key='idx'>
        <router-link class="link" v-bind:to="item.url">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HeaderBar',
    data () {
      return {
        test: ''
      }
    },
    props: {
      nav: {
        type: Array,
        default: [{name: '首页', url: '/'}],
        required: true,
        validator: function (value) {
          return value && value.length > 0 && value[0] instanceof Object
        }
      }
    }
  }
</script>
<style scoped>
  #headerBar{
    width: 100%;
    height: 45px;
    background-color: rgba(0,0,0,.5);
  }
  .navBar{
    width: 1000px;
    height: 45px;
    list-style: none;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .linkBox{
    padding: 0 25px 0 25px;
    hieght: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link{
    text-decoration:none;
    font-size: 15px;
    color: #fff;
  }
</style>

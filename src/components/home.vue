<template>
  <div class="home">
    <div class="header">
      <h1>龙城系统管理后台</h1>
      <div>
        <p>管理员：{{userName}}</p>
        <a href="javascript:;" @click="outLogin">注销</a>
      </div>
    </div>
    <div class="main">
      <div class="navigation">
        <nav-bar></nav-bar>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './common/headerBar.vue'
import Nav from './common/nav'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nav: [{name: '首页', url: '/'}, {name: '关于我们', url: '/about'}, {name: '联系我们', url: '/contact'}],
      userName: null
    }
  },
  beforeMount () {
    var userInfos = this.$storage.get('userInfo')
    if (userInfos && userInfos.name) {
      this.userName = userInfos.name
    }
  },
  components: {
    'header-bar': HeaderBar,
    'nav-bar': Nav
  },
  methods: {
    outLogin () {
      let vm = this
      vm.$storage.remove()
      vm.$router.replace({name: 'Login', path: '/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0 20px;
  height: 80px;
  background-color: rgba(0,0,0,.6);
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  position: fixed;
  top: 0;
  left: 0;
}
.header>h1{
  height: 80px;
  font: bold 25px/80px arial,sans-serif;
  color: #fff;
}
.header>div{
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: flex-end;
  -webkit-align-items: flex-end;
}
.header p,.header a{
  font: bold 18px arial,sans-serif;
  color: #fff;
}
.main{
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  -webkit-flex-direction: row;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
  align-items: center;
  -webkit-align-items: center;
}
.navigation{
  width: 20%;
  height: 100%;
  border-right: 1px solid rgba(238,238,238,.6);
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding-top: 80px;
}
.content{
  width: 80%;
  height: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding-top: 80px;
}
.home{
  width: 100%;
  height: 100%;
}
.home>p{
  margin-top: 100px;
  text-align: center;
}
</style>

<template>
  <div class="login">
    <div class="login_box">
       <div class="flexRow">
        <label class="label">用户名</label>
        <input class="input" type="text" v-model="username" />
       </div>
       <div class="flexRow">
         <label class="label">密<span>密</span>码</label>
         <input class="input" type="password" v-model="psw" />
      </div>
      <p v-if="err" class="errInfo">{{err}}</p>
      <div class="flexRowRight">
        <button class="btn" @click="toLogin">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        psw: '',
        err: null
      }
    },
    methods: {
      toLogin: function () {
        let userInfos = {name: 'pengcheng', psw: '1234567', token: 'zxcvbnm@asdfghjkl'}
        let vm = this
        if ((vm.username && vm.username === userInfos.name) && (vm.psw && vm.psw === userInfos.psw)) {
          localStorage.setItem('userInfo', JSON.stringify(userInfos))
          vm.err = null
          vm.$router.push({name: 'Home', path: '/'})
        } else {
          vm.err = '用户名或密码错误'
        }
      }
    }
  }
</script>
<style scoped>
  .flexRow{
    height: 45px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
    align-items: center;
    -webkit-align-items: center;
  }
  .login{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_box{
    padding: 20px;
    border: 1px solid rgba(238,238,238,.6);
  }
  .input{
    height: 32px;
    width: 230px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
  }
  .label{
    width: 80px;
    font-size: 16px;
    color: #fff;
  }
  .label>span{
    opacity: 0;
  }
  .flexRowRight{
    height: 45px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .btn{
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    color: #fff;
    background-color: rgba(0,245,255,.6);
  }
  .errInfo{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #f00;
    text-align: center;
  }
</style>

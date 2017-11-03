<template>
  <div class="container">
    <div>
      <h1 class="mainTitle" @click="showSubTitle(0)">系统信息</h1>
      <transition name="bounce-1">
        <ul class="lists" v-show="subTitleKey === 0">
          <li class="list">
            <icon name="home" scale=1.3 label="home" ></icon>
            <router-link to="/welcome" tag="li">欢迎进入</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <h1 class="mainTitle" @click="showSubTitle(1)">用户管理</h1>
      <transition name="bounce-2">
        <ul class="lists" v-show="subTitleKey === 1">
          <li class="list">
            <router-link to="/user/list">用户列表</router-link>
          </li>
          <li class="list">
            <router-link to="/user/edit">{{isEdit ? '编辑用户' : '添加用户'}}</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <h1 class="mainTitle" @click="showSubTitle(2)">信息统计</h1>
      <transition name="bounce-2">
        <ul class="lists" v-show="subTitleKey === 2">
          <li class="list">
            <router-link to="/statistics/father">page one</router-link>
          </li>
          <li class="list">
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <h1 class="mainTitle" @click="showSubTitle(3)">标题三</h1>
      <transition name="bounce-3">
        <ul class="lists" v-show="subTitleKey === 3">
          <li class="list">
            <router-link to="/about">关于我们</router-link>
          </li>
          <li class="list">
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li class="list">
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div>
      <h1 class="mainTitle" @click="showSubTitle(4)">标题四</h1>
      <transition name="bounce-4">
        <ul class="lists" v-show="subTitleKey === 4">
          <li class="list">
            <router-link to="/about">关于我们</router-link>
          </li>
          <li class="list">
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li class="list">
            <router-link to="/about">关于我们</router-link>
          </li>
          <li class="list">
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Nav',
    data () {
      return {
        nav: [{title: '标题一', url: '/about', children: [{title: '副标题一', url: '／contact'}, {title: '副标题一', url: '／contact'}]}, {title: '标题二', url: '/contact', children: [{title: '副标题一', url: '／about'}, {title: '副标题一', url: '／about'}]}],
        subTitleKey: 0
      }
    },
    beforeMount () {
      console.log('123', this.$route)
    },
    computed: {
      isEdit () {
        return this.$route.name === 'Useredit' && this.$route.params && (this.$route.params.id + 1)
      }
    },
    methods: {
      showSubTitle (key) {
        var vm = this
        if (vm.subTitleKey !== key) {
          vm.subTitleKey = key
        }
      },
      enterFn (el) {
        var n = el.getElementsByTagName('li').length
        el.style.animation = 'bounce-in-' + n + ' 5s linear'
        console.log(el.style, n)
      },
      leaveFn (el, done) {
        done()
      }
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    background-color: rgba(68,68,68,.6);
  }
  .mainTitle{
    height: 45px;
    font: bold 18px/45px arial,sans-serif;
    color: #fff;
    border-bottom: 1px solid rgba(238,238,238,.6);
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding-left: 35px;
  }
  .lists{
    list-style: none;
    background-color: #fff;
    overflow: hidden;
  }
  .list{
    height: 45px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
    align-items: center;
    -webkit-align-items: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding-left: 55px;
    border-bottom: 1px solid rgba(176,176,176,.6);
  }
  .listNoBorder{
      height: 45px;
      display: flex;
      display: -webkit-flex;
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
      align-items: center;
      -webkit-align-items: center;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding-left: 55px;
    }
    .router-link-active{
      color: rgba(255,0,0,.5);
    }
    .bounce-1-enter-active {
      animation: bounce-in-1 500ms linear;
      -webkit-animation: bounce-in-1 500ms linear;
    }
    .bounce-1-leave-active {
      animation: bounce-in-1 500ms linear reverse;
      -webkit-animation: bounce-in-1 500ms linear reverse;
    }
    .bounce-2-enter-active {
      animation: bounce-in-2 500ms linear;
      -webkit-animation: bounce-in-2 500ms linear;
    }
    .bounce-2-leave-active {
      animation: bounce-in-2 500ms linear reverse;
      -webkit-animation: bounce-in-2 500ms linear reverse;
    }
    .bounce-3-enter-active {
      animation: bounce-in-3 500ms linear;
      -webkit-animation: bounce-in-3 500ms linear;
    }
    .bounce-3-leave-active {
      animation: bounce-in-3 500ms linear reverse;
      -webkit-animation: bounce-in-3 500ms linear reverse;
    }
    .bounce-4-enter-active {
      animation: bounce-in-4 500ms linear;
      -webkit-animation: bounce-in-4 500ms linear;
    }
    .bounce-4-leave-active {
      animation: bounce-in-4 500ms linear reverse;
      -webkit-animation: bounce-in-4 500ms linear reverse;
    }
    @keyframes bounce-in-1 {
      0% {
        height: 0;
      }
      100% {
        height: 45px;
      }
    }
    @-webkit-keyframes bounce-in-1 {
      0% {
        height: 0;
      }
      100% {
        height: 45px;
      }
    }
    @keyframes bounce-in-2 {
      0% {
        height: 0;
      }
      100% {
        height: 90px;
      }
    }
    @-webkit-keyframes bounce-in-2 {
      0% {
        height: 0;
      }
      100% {
        height: 90px;
      }
    }
    @keyframes bounce-in-3 {
      0% {
        height: 0;
      }
      100% {
        height: 135px;
      }
    }
    @-webkit-keyframes bounce-in-3 {
      0% {
        height: 0;
      }
      100% {
        height: 135px;
      }
    }
    @keyframes bounce-in-4 {
      0% {
        height: 0;
      }
      100% {
        height: 180px;
      }
    }
    @-webkit-keyframes bounce-in-4 {
      0% {
        height: 0;
      }
      100% {
        height: 180px;
      }
    }
</style>

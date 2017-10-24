<template>
  <div class="about">
    <img class="logo" src="./../assets/logo.png">
    <div class="content inputBox">
      <span class="showText">数量：</span><input type="text" v-model.number="count" />
    </div>
    <div class="content inputBox">
      <span class="showText">单价：</span><input type="text" v-model.number="price" />
    </div>
    <div class="content inputBox">
      <span class="showText">消费总额：{{text}}</span>
    </div>
    <div class="content">
      <div class="text" @click="log">结算</div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'About',
    data () {
      return {
        count: 1,
        price: 10
      }
    },
    computed: {
      text: function () {
        return this.count * this.price
      }
    },
    methods: {
      log () {
        alert('消费金额共计' + this.text + '元，现金、刷卡还是手机支付？')
      }
    },
    watch: {
      text: function (v) {   // 监听price的变化
        console.log('123', v)
      }
    }
  }
</script>
<style scoped>
  .about{
    width: 100%;
    margin: 0 auto;
    background-color: rgba(176,176,176,.6);
    padding: 20px 0 50px 0;
  }
  .logo{
    display: block;
    margin: 0 auto;
  }
  .content{
    width: 100%;
    height: 100px;
    background-color: rgba(68,68,68,.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text{
    text-align: center;
    padding: 15px 20px;
    font-size: 18px;
    color: #fff;
  }
  .showText{
    margin-right: 20px;
    font-size: 16px;
    color: #f00;
  }
  .inputBox{
    height: 35px;
  }
</style>

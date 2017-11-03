<template>
  <div :class="{alert: isAlert, confirm: type === 'confirm'}">
    <div v-if="type === 'alert'" class="content">
      <p>{{(msg && msg.message) || msg}}</p>
    </div>
    <div v-else class="confirmCon">
      <p>{{(msg && msg.message) || msg}}</p>
      <div class="btn">
        <button @click="_submit(1)">确定</button>
        <button @click="_submit(0)">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Alert',
    props: ['type', 'msg'],
    data () {
      return {

      }
    },
    computed: {
      isAlert () {
        return this.type === 'alert'
      },
      isConfirm () {
        return this.type === 'confirm'
      }
    },
    methods: {
      _submit (status) {
        let vm = this
        let state = vm.msg && vm.msg.id ? {status: status, id: vm.msg.id} : status
        this.$emit('submit', state)
      }
    }
  }
</script>
<style scoped>
  .alert{
    width: 100%;
    height: 45px;
    position: relative;
  }
  .confirm{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .content>p{
    min-width: 150px;
    height: 45px;
    padding: 0 15px;
    border: 1px solid rgba(176,176,176,.6);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizeing: border-box;
    font: 16px/45px arial,sans-serif;
    color: #fff;
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    background-color: rgba(68,68,68,.8);
    border-radius: 5px;
  }
  .confirmCon{
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    min-width: 320px;
    padding: 15px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizeing: border-box;
    border: 1px solid rgba(68,68,68,.8);
    border-radius: 5px;
  }
  .confirmCon>p{
    font: 16px/35px arial,sans-serif;
    text-align: center;
  }
  .btn{
    width: 100%;
    margin-top: 25px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    -webkit-justify-content: space-around;
    align-items: center;
    -webkit-align-items: center;
   }
   .btn button{
    width: 120px;
    height: 36px;
    font: bold 16px/35px arial,sans-serif;
    color: rgba(68,68,68,.8);
    border: 1px solid rgba(68,68,68,.8);
    outline: none;
   }
   .btn button:nth-of-type(1){
    background-color: rgba(68,68,68,.8);
    color: #fff;
   }
</style>

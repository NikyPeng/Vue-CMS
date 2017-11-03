<template>
  <div class="sonsecond">
    <p>
      <label>单价：</label>
      <input type="text" v-model:number="price" readonly />
    </p>
    <p>
      <label>数量：</label>
      <input type="text" v-model:number="count" readonly />
    </p>
    <p>
      <label>总价：</label>
      <input type="text" v-model:number="total" readonly />
    </p>
    <button @click="_calculate">计算</button>
  </div>
</template>
<script>
  import Bus from '@/components/common/public'
  export default{
    name: 'Sonsecond',
    data () {
      return {
        price: null,
        count: null,
        total: null
      }
    },
    mounted () {
      Bus.$on('submitInfos', (data) => {
        console.log('sonSecond', data)
        this.price = data.price
        this.count = data.count
      })
    },
    methods: {
      _calculate () {
        this.total = this.price * this.count
        Bus.$emit('calculate', this.total)
      }
    }
  }
</script>
<style scoped>
  .sonsecond{
    width: 100%;
    height: 100%;
  }
  p{
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: flex-start;
    -webkit-align-items: center;
  }
  label{
    width: 100px;
    text-align: right;
    font: 18px arial,sans-serif;
  }
  input{
    width: 238px;
    height: 35px;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: rgba(238,238,238,0);
  }
  button{
    width: 80px;
    height: 35px;
    font: 18px/35px arial,sans-serif;
    border: 1px solid rgba(176,176,176,.6);
    outline: none;
    border-radius: 5px;
  }
</style>

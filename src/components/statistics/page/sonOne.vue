<template>
  <div class="sonone">
    <div>
      <label>单价：</label>
      <input type="text" v-model:number="price" />
    </div>
    <div>
      <label>数量：</label>
      <input type="text" v-model:number="count" />
    </div>
    <div>
      <label>总价：</label>
      <input type="text" v-model:number="total" readonly />
    </div>
    <button @click="_submit">确定</button>
  </div>
</template>
<script>
  import Bus from '@/components/common/public'
  export default{
    name: 'Sonone',
    data () {
      return {
        price: null,
        count: null,
        total: null
      }
    },
    mounted () {
      Bus.$on('calculate', (data) => {
        console.log('sonOne', data)
        this.total = data
      })
    },
    methods: {
      _submit () {
        let data = {
          price: this.price,
          count: this.count,
          total: this.total
        }
        Bus.$emit('submitInfos', data)
      }
    }
  }
</script>
<style scoped>
  .sonone{
    width: 100%;
    padding: 30px 0;
  }
  .sonone>div{
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
    outline: none;
    padding: 0 10px;
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

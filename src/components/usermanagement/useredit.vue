<template>
  <div class="content">
    <p>
      <label>序号：</label><input type="text" v-model="data.id" />
    </p>
    <p>
      <label>姓名：</label><input type="text" v-model="data.username" />
    </p>
    <p>
      <label>管理权限：</label><input type="text" v-model="data.level" />
    </p>
    <p>
      <button @click="save">保存</button>
      <button @click="cancel" class="del"> 取消</button>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Useredit',
    data () {
      return {
        list: [
          {id: 1, username: '张三', level: 'admin'},
          {id: 2, username: '李四', level: '部门管理员'},
          {id: 3, username: '王五', level: '部门管理员'},
          {id: 4, username: '赵六', level: '部门管理员'},
          {id: 5, username: '刘七', level: '部门管理员'}
        ]
      }
    },
    computed: {
      data () {
        return this.$route.params && !isNaN(this.$route.params.id) ? this.list[this.$route.params.id - 1] : {}
      }
    },
    beforeMount () {

    },
    methods: {
      save () {

      },
      cancel () {
        this.$router.back()
      }
    }
  }
</script>
<style scoped>
  .content{
    width: 100%;
    border: 1px solid rgba(238,238,238,.6);
    padding: 20px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  p{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid rgba(176,176,176,.6);
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
    align-items: center;
    -webkit-align-items: center;
  }
  label{
    width: 120px;
    text-align: right;
    font: 18px arial,sans-serif;
  }
  input{
    width: 200px;
    height: 35px;
    font: 15px arial,sans-serif;
  }
  button{
    width: 80px;
    height: 30px;
    border: none;
    background-color: rgba(0,0,0,.8);
    color: rgba(255,255,255,1);
    font: 15px/30px arial,sans-serif;
    outline: none;
  }
  .del{
    margin-left: 30px;
    background-color: rgba(255,255,255,.8);
    color: rgba(0,0,0,1);
    border: 1px solid rgba(176,176,176,.6);
  }
</style>

<template>
  <div class="content">
    <table>
      <caption>用户列表</caption>
      <thead>
        <tr>
          <th>序号</th>
          <th>用户名</th>
          <th>管理员权限</th>
          <th>编辑</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="4">
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="(item, idx) in userlist" :key="idx">
          <td>{{item.id}}</td>
          <td>{{item.username}}</td>
          <td>{{item.level}}</td>
          <td>
            <button @click="editUser(item.id)">编辑</button>
            <button @click="delUser(item.id)" class="del">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-show="isShow" class="dialog">
      <Alert @submit="changeStatus" :type="type" :msg="msg" />
    </div>
  </div>
</template>
<script>
  import Alert from '@/components/common/alert'
  export default {
    name: 'Userlist',
    data () {
      return {
        userlist: [
          {id: 1, username: '张三', level: 'admin'},
          {id: 2, username: '李四', level: '部门管理员'},
          {id: 3, username: '王五', level: '部门管理员'},
          {id: 4, username: '赵六', level: '部门管理员'},
          {id: 5, username: '刘七', level: '部门管理员'}
        ],
        isShow: false,
        type: 'confirm',
        msg: null,
        id: null
      }
    },
    computed: {
      flag () {
        return this.$route.params && this.$route.params.id
      }
    },
    create () {
      console.log()
    },
    components: {
      'Alert': Alert
    },
    methods: {
      editUser (id) {
        this.$router.push({
          name: 'Useredit',
          params: {
            id: id
          }
        })
      },
      delUser (id) {
        this.isShow = true
        this.msg = {message: '确定删除？', id: id}
      },
      changeStatus (e) {
        if (e.status === 1) {
          this.msg = '删除成功！'
          this.type = 'alert'
          this.userlist.splice(e.id - 1, 1)
          setTimeout(() => {
            this.isShow = false
          }, 1000)
        } else {
          this.isShow = false
          this.msg = ''
        }
      }
    }
  }
</script>
<style scoped>
  .content{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
  }
  table{
    width: 100%;
    border: 1px solid rgba(238,238,238,.6);
    border-collapse:collapse;
  }
  thead th{
    height: 45px;
    border: 1px solid rgba(238,238,238,.6);
  }
  tbody td{
    height: 45px;
    border: 1px solid rgba(176,176,176,.6);
  }
  tbody tr:nth-last-of-type(1) td{
    border-bottom: none;
  }
  tfoot td{
    height: 45px;
    border: 1px solid rgba(238,238,238,.6);
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
    background-color: rgba(255,255,255,.8);
    color: rgba(0,0,0,1);
    border: 1px solid rgba(176,176,176,.6);
  }
  .dialog{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

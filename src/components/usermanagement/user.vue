<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script>
  export default{
    name: 'User',
    data () {
      return {
        lists: [
          {id: 1, username: '张三', level: 'admin'},
          {id: 2, username: '李四', level: '部门管理员'},
          {id: 3, username: '王五', level: '部门管理员'},
          {id: 4, username: '赵六', level: '部门管理员'},
          {id: 5, username: '刘七', level: '部门管理员'}
        ]
      }
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    height: 100%;
  }
</style>

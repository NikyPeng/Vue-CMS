<template>
  <div class="contact">
    <list-view>
      <li slot="header" class="header">
        <h1 class="title">十九大会议纪要</h1>
      </li>
      <template>
        <li class="list" v-for="(item,idx) in content" :key="idx">
          <a class="link" href="###">
            <div>
              <span>{{item.title}}</span>
              <span>{{item.time}}</span>
            </div>
          </a>
        </li>
        <li class="list" v-for="(ite,x) in contentS" :key="x">
          <a class="link" href="###">
            <div>
              <span>{{ite.title}}</span>
              <span>{{ite.time | dateFormat(1)}}</span>
            </div>
          </a>
        </li>
      </template>
      <li slot="footer" class="footer">
        <h1 class="title">往期回顾</h1>
      </li>
    </list-view>
  </div>
</template>
<script>
  import ListView from './common/listView'
  export default {
    name: 'Contact',
    data () {
      return {
        content: [{title: '标题一', time: '2017-10-18 14:44'}, {title: '标题二', time: '2017-10-18 14:44'}, {title: '标题三', time: '2017-10-18 14:44'}, {title: '标题四', time: '2017-10-18 14:44'}, {title: '标题五', time: '2017-10-18 14:44'}],
        contentS: [{title: '标题一', time: 1508309040000}, {title: '标题二', time: 1508309045000}, {title: '标题三', time: 1508309050000}, {title: '标题四', time: 1508309140000}, {title: '标题五', time: 1508319040000}]
      }
    },
    components: {
      'list-view': ListView
    },
    filters: {
      toTimestamp: function (value) {
        if (value) {
          return new Date(value).getTime()
        } else {
          return new Date().getTime()
        }
      },
      dateFormat: function (value, type) {
        var time, y, m, d, h, min, s, timeFormatOne, timeFormatTwo, timeFormatThree
        time = value ? new Date(value) : new Date()
        y = time.getFullYear()
        m = time.getMonth() + 1
        d = time.getDate()
        h = time.getHours()
        min = time.getMinutes()
        s = time.getSeconds()
        timeFormatOne = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)
        timeFormatTwo = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (min < 10 ? '0' + m : m)
        timeFormatThree = y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
        return type === 0 ? timeFormatOne : type === 1 ? timeFormatTwo : timeFormatThree
      }
    }
  }
</script>
<style scoped>
  .contact{
    width: 100%;
    margin: 0 auto;
  }
  .header,.footer{
    width: 100%;
    height: 45px;
    background-color: rgba(68,68,68,.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title{
    font-size: 20px;
    color: #fff;
  }
  .list{
    width: 100%;
    height: 45px;
  }
  .link{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration:none;
    color: rgba(68,68,68,.8);
  }
  .link>div{
    padding: 0 15px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

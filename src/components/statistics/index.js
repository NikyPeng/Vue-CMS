/**
 * Created by glzc on 2017/11/9.
 */
import Statistics from './statistics'
import Father from './page/father'
const statisticsRouters = {
  path: '/statistics',
  name: 'Statistics',
  component: Statistics,
  meta: {
    ac: ['admin'],
    title: '统计',
    fail: ''
  },
  children: [
    {path: 'father', name: 'Fater', component: Father, meta: {ac: ['admin'], fail: ''}}
  ]
}
export default statisticsRouters

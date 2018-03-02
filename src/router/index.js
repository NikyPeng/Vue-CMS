import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/login'
import Welcome from '@/components/welcome'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import User from '@/components/usermanagement/user'
import Userlist from '@/components/usermanagement/userlist'
import Useredit from '@/components/usermanagement/useredit'
import Statistics from '@/components/statistics/statistics'
import Father from '@/components/statistics/page/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      linkExactActiveClass: 'router-link-active',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: Welcome
        },
        {
          path: '/user',
          name: 'User',
          component: User,
          redirect: '/user/list',
          children: [
            {
              path: 'list',
              name: 'Userlist',
              component: Userlist
            },
            {
              path: 'edit/:id?',
              name: 'Useredit',
              component: Useredit
            }
          ]
        },
        {
          path: '/statistics',
          name: 'Statistics',
          component: Statistics,
          redirect: '/statistics/father',
          children: [
            { path: 'father', name: 'Father', component: Father }
          ]
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        }
      ],
      beforeEnter: (to, from, next) => {
        let userInfos = this.a.app.$storage.get('userInfo')
        if (!userInfos) {
          next({name: 'Login', path: '/login'})
        } else {
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        let userInfos = this.a.app.$storage.get('userInfo')
        if (!userInfos) {
          next()
        } else {
          next(false)
        }
      }
    }
  ],
  mode: 'history'
})

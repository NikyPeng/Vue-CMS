import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import Home from '@/components/home'
import Login from '@/components/common/login'
const About = () => import(/*  webpackChunkName: "about" */'./../components/about')
const Contact = () => import(/*  webpackChunkName: "contact" */'./../components/contact')
const User = () => import(/*  webpackChunkName: "user" */'./../components/usermanagement/user')
const Userlist = () => import(/*  webpackChunkName: "userlist" */'./../components/usermanagement/userlist')
const Useredit = () => import(/*  webpackChunkName: "useredit" */'./../components/usermanagement/useredit')
const Statistics = () => import(/*  webpackChunkName: "statistics" */'./../components/statistics/statistics')
const Father = () => import(/*  webpackChunkName: "father" */'./../components/statistics/page/father')

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

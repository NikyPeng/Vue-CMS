import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/login'
import Welcome from '@/components/welcome'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: 'welcome',
          name: 'Welcome',
          component: Welcome
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
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

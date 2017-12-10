import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Open from '@/components/Open'
import Contact from '@/components/Contact'

Vue.use(Resource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menu/:category',
      name: 'MenuCategory',
      component: Menu,
      props: false
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/open',
      name: 'Open',
      component: Open
    },
    {
      path: '/open/:place',
      name: 'OpenPlace',
      component: Open,
      props: false
    }
  ]
})

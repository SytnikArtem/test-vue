import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/about',
      name: 'about',
      props: {
        color: 'red'
      },
      component: () => import('./views/About.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('./views/Contacts.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
import pageQuiList from '../pages/pageQuiList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      children: [
        {
          path: '/',
          name: 'hello',
          component: Hello
        },
        {
          path: 'info',
          name: 'info',
          component: pageQuiButton
        }
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    }
  ]
})

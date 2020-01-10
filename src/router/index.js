import Vue from 'vue'
import Router from 'vue-router'
import mytable from '@/components/mytable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mytable',
      component: mytable
    }
  ]
})

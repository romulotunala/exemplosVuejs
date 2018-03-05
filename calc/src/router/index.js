import Vue from 'vue'
import Router from 'vue-router'
import SimpleCalc from '@/components/SimpleCalc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleCalc',
      component: SimpleCalc
    }
  ]
})

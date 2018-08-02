import Vue from 'vue'
import Router from 'vue-router'
import SimpleCalc from '@/components/SimpleCalc'
import Calc from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleCalc',
      component: SimpleCalc
    },
    {
      path: '/calc',
      name: 'Calc',
      component: Calc
    }
  ]
})

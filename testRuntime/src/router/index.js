import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TelaLogin from '@/components/TelaLogin'
import ListaAlunos from '@/components/ListaAlunos'
import Caio from '@/components/Caio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/cpxbook',
    	name:'TelaLogin',
    	component:TelaLogin
    },
    {
    	path:'/vnw',
    	name:'ListaAlunos',
    	component:ListaAlunos
    },
    {
      path:'/exemplocaio',
      name:'Caio',
      component:Caio
    }
  ]
})

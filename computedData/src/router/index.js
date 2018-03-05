import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ConversaoMoeda from '@/components/ConversaoMoeda'
import TestScroll from '@/components/TestScroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'HelloWorld',
    	component: HelloWorld
    },
    {
    	path: '/moeda',
    	name: 'ConversaoMoeda',
    	component: ConversaoMoeda
    },
    {
        path:'/scroll',
        name:'TestScroll',
        component:TestScroll
    }
  ]
})

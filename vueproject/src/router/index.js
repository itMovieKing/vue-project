import Vue from 'vue'
import Router from 'vue-router'
import Car from '@/components/Car'
import EventListen from '@/components/EventListen'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Person from '@/components/Person'
Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
		  path: '/car',
		  name: 'Car',
		  component: Car
		},
		{
			path:'/',
			name:'EventListen',
			component:EventListen
		},
		{
			path:'/login',
			name:'Login',
			component:Login
		},
		{
			path:'/person',
			name:'Person',
			component:Person
		}

  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Article from '@/views/article'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:Layout,
    children:[
      {
        path:'',
        name:'home',
        component:Home
      },
      {
        path:'/article',
        name:'article',
        component:Article
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  const user = JSON.parse(window.localStorage.getItem('user'))
  console.log(user);
  if(to.path !== '/login'){
    if(user){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router

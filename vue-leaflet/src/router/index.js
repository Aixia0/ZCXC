import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import map from '@/components/map'
import content from '@/components/content'

Vue.use(Router)
//实例化路由
export default new Router({
//配置路由
  routes: [
   //默认跳转路由
    { path: '*',
     redirect: '/map' 
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/map',
      name:'map',
      component: map
    },
    {
      path:'/content/:id', //动态路由
      name:'content',
      component: content
    }

  ]
})

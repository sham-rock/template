import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import store from '../store';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{
        title:'首页'
      },
      component: resolve=>{require(['@/components/index'],resolve)}
    }
  ]
})
// 全局前置守卫
router.beforeEach((to,from,next)=>{  
  store.dispatch('openLoading')
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})
// 全局后置钩子 不会接受 next 函数
router.afterEach((to,from)=>{
  store.dispatch('closeLoading')
})
export default router

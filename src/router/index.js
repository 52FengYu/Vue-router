import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/* 
import home from "../views/home.vue"
import mine from "../views/mine.vue"
import list from "../views/list.vue" */
export default new Router({
  routes: [
    {
      // path:"/",component:() => import("@/views/home.vue")
      //设置默认显示，现在默认显示home中的内容
      path:"/",redirect:"/home"
    },
      {
        path:"/home",component:() => import("@/views/home.vue")
      },
      {
        path:"/list",component:() => import("@/views/list.vue"),children:[
          {path:"guonei", component:() => import("../views/guoneinews")},
          {path:"guoji", component:() => import("../views/guojinews")}
        ]
      },{
        path:"/mine",component:() => import("@/views/mine.vue")
      },
      {
        path:"/detail/:id",component:() => import("../views/detail.vue")
      }
  ]
})

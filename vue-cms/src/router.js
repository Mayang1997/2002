import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

// 子组件在这里引入 
/* 
    两种方式引入
    1：import 组件 from 组件路径  -  不推荐
    2：const 组件 = ()=>import('组件路径')  - 按需加载 推荐
*/
const Login = ()=>import('@/components/common/login/Login.vue');


// 导入组件集合
import navs from './utils/navs.js'
// 放置路由的空数组
let arr = [];
// 循环导出路由
navs.forEach(itme=>{
    if(itme.children){
        itme.children.forEach(ele=>{
            arr.push({ path: ele.path, component: ele.comm})
        })
    }
})

const router = new VueRouter({
    // 路由模式
    mode: "hash",
    // 组件由 routes 接收
    routes:[
        // 合并路由
        ...arr,
        // 命名视图 - name
        {path: '/login', components: {Login:Login}},
    ]
})

// 全局路由守卫
router.beforeEach(function(to, from, next){
    if(to.path !== '/login'){
        // 判断token是否存在来跳转路由
        if(localStorage.getItem('token')){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

export default router
# element 项目搭建

## cnpm 的安装
```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* 一：全局安装Vue脚手架
```
    npm install -g @vue/cli

    使用 vue --version 来检测脚手架安装完成和版本
```

* 创建脚手架项目
```
    vue create 项目名
```

* 启动项目
```
    cd vue-element-cms
    npm run serve

    配置启动命令 - 在package.json中的scripts下添加
    "start": "npm run serve"
    npm start 启动项目
```

## 安装路由环境 

```
    (1)：安装路由
        npm install vue-router -S     

    (2): 配置 - 在src根目录下创建 router.js 文件，并编译路由

        import Vue from 'vue'
        import VueRouter from 'vue-router'
        // 注册路由
        Vue.use(VueRouter)
        // 子组件在这里引入 
        /* 
            两种方式引入
            1：import 组件 from 组件路径  -  不推荐
            2：const 组件 = ()=>import('组件路径')  - 路由懒加载 推荐
        */

        const router = new VueRouter({
            // 组件由 routes 接收
            routes:[
                
            ]
        })

        export default router

    (3): 导入到根组件Vue中 - main.js
        import Vue from 'vue'
        import App from './App.vue'

        Vue.config.productionTip = false

        import router from './router.js';

        new Vue({
            router,
            render: h => h(App),
        }).$mount('#app')

```

## Vuex状态管理 安装  

```
    (1) 安装 
        npm install vuex -S
    
    (2) 配置Vuex环境

        在src下创建 store 文件并创建 index.js配置

        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        const store = new Vuex.Store({
            modules:{

            }
        })

        export default store

    (3) 导入到 mian.js 中的根实例 Vue 中加载
        import Vue from 'vue'
        import Vuex from 'vuex'

        import store from './store/index.js';

        new Vue({
            router,
            store,
            render: h => h(App),
        }).$mount('#app')

        在页面组件中，可以使用 this.$store.state / this.$store.commit()
```

## axios 的安装和封装

```
    (1) 安装 axios
        npm install axios -S

    (2) 封装并配置 axios 请求
        配置完成挂载到 Vue实例原型上
```

## sass 的安装

```
    npm install sass-loader -D 
    npm install sass -D (node sass)
```

## element 安装
```
    npm i element-ui -S
    // 安装 element - 一次性安装
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI);
    
```

## 文件上传格式框架

```
    安装在后端中
    cnpm install multiparty -s
```
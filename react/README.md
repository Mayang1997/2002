# 脚手架创建 网络配置源
```
    将源网转换成淘宝镜像 ： npm config set registry http://registry.npm.taobao.org

    将源网转换成淘宝镜像 ： npm config set registry http://www.npmjs.org
```

# 项目创建

cnpm install create-react-app -g
create-react-app react-antd-cms
cd react-antd-cms

npm start  // 启动项目
npm run build  // 打包上线

注意：暴露隐藏文件的做法
git init
git add .
git commit -m 'first'
npm run eject  // 把隐藏文件都暴露出来

npm start  // 运行项目


# 环境配置

1、自定义端口号 /scripts/start.js 搜索 PORT

2、配置 @ 别名 /config/webpack.config.js 里找到 resolve.alias

3、favicon制作 找免费在线制作网站，下载 32*32的尺寸。

4、sass安装 只用安装 node-sass 这个包即可。

5、本地环境怎么配置代理

安装 cnpm install http-proxy-middleware -D 新建代理文件 src/setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://xxx.com',   // 目标服务器
      changeOrigin: true
    })
  );
};
重启服务


## 路由

1：安装 ：cnpm i react-router-dom -S

```
    HashRouter / BrowserRouter (二选一使用)
    <HashRouter> URL格式为Hash路由组件
    <BrowserRouter> 浏览器的路由组件

    Router是所有路由组件共用的底层接口组件，它是路由规则制定的最外层的容器。
    Link / NavLink 相当于是超链接，路由跳转的组件
    Redirect  用于实现重定向
    Switch  用于包裹所有的Route
    Route 路由容器 
        Route的属性： exact - 严格匹配路径


    只有被Route容器包裹过的组件中，才能以下API：
    this.props.history.push() / replace() / go() / goBack()
    this.props.match.params  动态路由取参

    那些未被Route进行直接包裹的组件中，是没有 this.props.history等API的。
    也想拥有这些API，怎么办？
    ```
    import { withRouter } from 'react-router-dom'

    class XXX extends React.Component {}

    export default withRouter(XXX)
```

## 安装 antd 

安装：cnpm install antd -S
```
    // index.js 导入 antd
    import 'antd/dist/antd.css'
```
安装 antd 的icon插件库
cnpm install @ant-design/icons -S

##  配置 axios

安装：cnpm install axios -S


## 代码分割 

在 React 脚手架中，只需要安装 @loadable/component 即可
安装： cnpm install @loadable/component -S

```
   语法：
    // 导入代码分割包 
    import loadable from '@loadable/component';
    // 代码分割  
    const TestJsx = loadable(()=>import('./study/TestJsx'));
```

## Redux 

### 0: redux 概述

Flux 是Facebook官方提出一种应用程序数据管理思想

Redux 是其它团队基于Flux思想而开发出来、用于React项目架构的数据容器

Redux应用的三大原则:
1: 单一数据源:
    可以理解Redux为一个全局对象,且是唯一的,所有的状态都在全局对象store下进行统一的配置
2: state是只读的: 
    与React的setState相似，直接改变组件的state是不会触发render进行渲染组件的
    Redux中唯一改变state的方法就是触发action
3: Reducer必须是一个纯函数:
      reducer 纯函数得两个参数:
        参数一: state - 是当前纯函数的共享数据存储中心，是只读数据,唯一修改state的方式为触发 action
        参数二: action - 是一个描述应用 (state) 变化的普通对象，是把数据传入store的唯一途径,需要页面dispatch派发
    

### 1:创建 store

安装Redux核心包：cnpm install redux -S

创建一个 store
createStore() 来创建,该方法接收3个参数,其中 reducer 为必填参数

reducer 是一个纯函数,可以拆分为多个 子reducer,使用 combineReducers 来合并 reducer
reducer纯函数接收两个参数,分别为 state,action

    function TodoReducer(state, action){}
    state参数是当前reducer数据存储中心,唯一修改state的方式为 dispatch 派发 action 修改state的信号
    action参数: 是一个对象,用于更新state的行为,信号,通过dispatch派发而来,携带type和payload属性
          type: 做什么类型的任务,唯一
          payload: 任务的信息,有视图页面派发而来
```
  // 导入 Redux 核心模块
  import { createStore, combineReducers } from 'redux';

  // 创建一个 Redux 的核心仓库 store,，只能存在一个store
  /* 
      createStore: 给模块函数接收三个参数
      参数一：reducer - 是一个纯函数
  */
  const store = createStore(reducer)

  // 抛出 store
  export default store

```
### 2: 定义 reducer
```
// 给当前纯函数应用的 state 添加初始值,可被所有组件使用
let initStaye = {
    count: 1000
}

export default function TodoReducer(state=initStaye, action){
    // 在纯函数内部使用 switch 来处理dispatch派发过来不同的 action 任务
    // 在操作前,先对state做深复制,得到一个 newstate
    // 通过 newstate 操作修改,最后返回 newState
    switch (action.type) {
        // 根据type类型来做对应的事
        case 'add':
            
            return state;
        default:
            return state;
    }
}
```
### 3: 和并子reducer 

在实际工作中，reducer要拆分成多个子reducer，也就是多个纯函数。
最终在创建store时，要使用combineReducers进行合并(参见store创建代码)
```
  // 导入 Redux 核心模块
  import { createStore, combineReducers } from 'redux';
  // 引入 reducer
  import TodoReducer from './reducers/TodoReducer';

  // 合并子纯函数 reducer - 使用模块 combineReducers
  const reducer = combineReducers({
      todo: TodoReducer
  })

```

### 4: 使用 react-redux 包让 react与redux形成关联
安装 : cnpm install react-redux -S

在App.js文件导入 store 并使其与react组件形成关联
```
// 导入store和相关依赖属性,与react组件形成关联
import store from '@/store';
// Provider:
import { Provider } from 'react-redux'; 

function App() {
  return (
    <HashRouter>
      {/* Provider: 让ract与redux形成关联 */}
      {/* store 注入数据 */}
      <Provider store={store}>
        <Layout />
      </Provider>
      
    </HashRouter>

  );
}
```
###  5、在页面组件中使用store
```
import { connect } from 'react-redux'

// 把state中的数据，变成当成组件的props
function mapStateToProps(state){
  return {
    msg: state.msg
  }
}
// 把actions中方法，放在当前组件的props
function mapActionToProps(dispatch) {
  return {
    changeMsg: ()=>{
      // 派发一个action到reducer去
      console.log('changeMsg')
    }
  }
}
export default connect(mapStateToProps,mapActionToProps)(Home)
```

### 6: 关于Redux数据流的循环过程
```
在创建了store应用后, 有一个重要的高阶组件(函数) connect 接受两个参数分别为 mapStateToProps mapActionToProps

    mapStateToProps 映射reducer中state中的数据到当前组件中的 this.props中,那么在当前组件能够使用store中的数据
    mapActionToProps 映射 dispatch 派发 action 的方法到 this.props中,那么在本组件中可以使用this.props.(dispatch)的方法,派发action到reducer中

    流程:
    由 connect高阶函数 的 mapStateToProps 方法映射数据到组件中,当需要修改 store 中的state的数据,需要dispatch派发action到store中修改
    而 dispatch 派发的任务需要 通过 connect高阶函数 的 mapActionToProps 方法将 action 派发任务 映射到组件中
    组件通过 映射进来的派发任务向 store 发生对应的任务修改数据
    在store中的reducer纯函数中, action 参数接收 组件派发过来得 action
    首先 先对reducer纯函数 state 进行深复制, 在使用cation对象下的 payload 更新state中对应得数据
    最后 reducer 得switch会返回一个新的 state 
    在组件中 同样经过高阶组件 connect 中方法得映射,得到最新得 state
    如此循环... 就是 redux 状态管理得 数据流向
```

### 7: 异步数据 React 异步 action
```
组件外来数据建议从 props 中进来
redux 默认只接受 同步action, 异步action需要使用中间件 redux-thunk 

安装: cnpm install redux-thunk -S

异步action: 派发三次 action,以解决 redux 默认值接收同步action

使用 thunk

// 导入 Redux 核心模块
import { createStore, combineReducers, applyMiddleware } from 'redux';
// 引入 thunk - 是一个中间件,用于redux支持 异步 action
import thunk from 'redux-thunk';
// 使用 applyMiddleware 为 store 注入 Thunk Middleware
// 这样就可以使用 异步 action
const store = createStore(reducer, applyMiddleware(thunk))

```
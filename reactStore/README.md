# React 工程环境配置

## 项目环境

nood.js 10版本+
window 64bit

## 起步

    创建 react-stack 项目目录
    初始生成 package.json 文件  --  npm init -y

```
    安装 webpack

    1: 全局安装 (终端无法安装 - 使用git-bash)
    cnpm install webpack -g
    cnpm install webpack-cli -g

    2：开发依赖
    cnpm install webpack -D
    cnpm install webpack-cli -D
```

## webpack 配置文件 - webpack.config.js
```
    创建webpack的配置文件:
    1：自定义命名 xxx.config.js 
    2：官方推荐命名：webpack.config.js (建议：官方推荐默认配置的文件)

    如何编写配置文件呢?(参见webpack.config.js文件)
    使用 module.export = 配置对象

    配置对象中的选项
    1 设置入口文件: entry选项
        // entry - 入口：指定 webpack 打包或者本地服务运行时的程序默认文件
        /* 
            Path.resolve() - 设置入口的绝对路径
            参数一：__dirname 表示绝对路径 - 根路径到当前根文件的路径
            参数二：和__dirname 拼接组成绝对路径 
        */
        entry: path.resolve(__dirname,'./src/main.js'),
    2 设置出口: output选项
        // output - 出口：打包文件之后，打包的结果存放的位置
        output: {
            // filename：设置打包后文件的文件名
            filename: 'bundle.js',
            // 打包后结果存放的位置 - 出口文件路径的设置只能为绝对路径
            path: path.resolve(__dirname,'dist')
        },

    打包命令: 
    1：webpack --config xxx.config.js
    2：在package.json中配置打包命令 - "build": "webpack --config xxx.config.js"
        npm run build 
```
## plugin - 扩展功能

```
    1：html-webpack-plugin 
        用于自动生成一个html5文件，并且会将打包后的js文件都插入进去
        使用 cnpm install html-webpack-plugin -D 安装

        配置选项：
        template: 模板-自动生成一个HTML单页面，js文件也会注入进去
        title：标题：设置模板文件的标题 - title标签中需要写入 <％= htmlWebpackPlugin.options.title ％>
                    （注意<%= 两端有空格 %>）,才能转换成功
        new HtmlWebpackPlugin(配置对象)
        ```
            const HtmlWebpackPlugin = require('html-webpack-plugin');
            plugins: [
                // 自动生成 html5 单文件配置
                new HtmlWebpackPlugin({
                    // template - 模板： 设置模板的绝对路径或者相对，默认情况下为 src/index.ejs
                    template: path.resolve(__dirname, './public/index.html'),
                    // title 标题： 设置模板html文件的 title 名
                    title: 'React框架学习',
                }),
            ]
        ```

    2：cnpm install clean-webpack-plugin -D
        每次构建前都会自动删除 dist 文件夹
        new CleanWebpackPlugin()

        // 导入自动删除 dist 文件的包 - 最新
        const { CleanWebpackPlugin } = require('clean-webpack-plugin')
        plugins: [
            // 自动删除 dist 文件夹的包 - 最新的不需要传任何参数
            new CleanWebpackPlugin()
        ]
```

## 搭建 devServer - 实时监听代码并刷新

    1: 安装 
        cnpm install webpack-dev-server -g
        cnpm install webpack-dev-server -D
    2：配置 devServer
    ```
        devServer: {
            // port: 配置端口
            port: '8090',
            // open: 浏览器是否自动打开
            open: true,
            // contentBase: 设置本地服务所指向的静态资源目录，使用绝对路径
            contentBase: path.resolve(__dirname, 'public')
        }
    ```
        启动 devsever 服务: webpack-dev-server 命令
        注意： 如果时自定义命名 config.js文件，单单使用 webpack-dev-server 会保存
              需要在 webpack-dev-server 后加上 --config xxx.config.js，才能运行
        配置 npm start 启动服务
    ```
        在 package.json 中配置
        "serve": "webpack-dev-server --config webpack.config.js",
        "start": "npm run serve"
        使用 npm start 启动服务
    ```

## 搭建 HMR 热更新功能 - 它允许在运行时更新各种模块，而无需进行完全刷新

    1：前提需要安装 webpack 包才能使用
    const webpack = require('webpack');
    2：配置 HMR 热更新
        在 devServer 中设置 hot属性为 true，表示开启热更新
        在 扩展功能 plugins 中加入
        ```
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        ```

## loaders - 用于对代码中的各种文件进行编译转换，目标是转换称浏览器能识别的代码
    // 编译抽取 css 文件
    安装编译css | scss 文件包：cnpm i mini-css-extract-plugin -D
    const  MiniCssExtractPlugin  =  require('mini-css-extract-plugin')

    安装 loaders 管理资源环境
    1：加载 css
        需要在 module 配置中安装并添加 style-loader 和 css-loader
        ```
        cnpm install style-loader -D
        cnpm install css-loader -D
        ```
    2: 加载 scss
        需要在 module 配置中安装并添加 style-loader，css-loader 与 sass-loader 链式调用
        安装
        ```
        前提需要 webpack 包
        cnpm install sass-loader -D
        cnpm instal node-sass -D
        ```
    加载css 与 scss 组合写法
    ```
    model: {
        // rules: 规则 - 编译转换代码文件需要配置的属性
        // 在编译 sass 中 不能加入 style-loader(暂时)
        rules: [
            // 编译转换 css | sass
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.s[ac]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'] },
        ]
    },
    ```

## 配置 babel 环境 ES5 - ES6 - webpack 4版本

```
    前提：安装 webpack 包
    1:安装： cnpm install -D babel-loader @babel/core @babel/preset-env

    2：module配置
     // exclude - 不包含
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
```
## 配置 ESlint 代码规范检测环境

    1：安装：cnpm install eslint-loader -D   
            cnpm install eslint -D

    2: 在根目录创建  .eslintrc.json 文件夹，并配置选项
    ```
    // semi - 代码结束必须要使用 ; 结束，否则报错
    // no-console: 'error'   0 代表关闭，1代表警告 2 代表报错
    {
        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
        "rules": {
            "semi": "error"
        }
    }
    
    在 module 中的 rules 中添加规则
    // enforce - 前置检测
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce:'pre'
    },

    在devServer配置中加入当eslint检测到错误时，出现遮罩层
    overlay: {
        errors: true
    }
    ```


## 生成环境与开发环境的搭建

```
    1: 使用 node 的一个依赖包来区分开发与生产环境 
    需要安装 cnpm install cross-env -D

    2: 在package.json 中加入 切换开发与生产环境的变量
    分别为：cross-env NOED_ENV=production  生产环境
            cross-env NOED_ENV=development 开发环境
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "serve": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js",

```

## 配置 React 环境

```
    1：安装 
    cnpm install react -S
    cnpm install react-dom -S

    3：安装支持React语法的包
    cnpm install @babel/preset-react -D  支持jsx语法
    配置编译转换 react的 loaders - 在根目录夏创建 .babelrc.json 文件，并配置
    {
        "presets": [
        ["@babel/preset-react"],
        ["@babel/preset-env",{"useBuiltIns": "entry"}]
        ]
    }

    3：在根文件夹创建 React 根组件
    编译如下
    import React from 'react';
    // 定义一个 Recat 根组件
    export default class App extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return (
                <div>
                    <h1>Hello React</h1>
                </div>
            )
        }
    }

    4：将根组件渲染到真实 DOM 节点上
    // 引入 React 和 ReactDOM 
    import React from 'react';
    import ReactDOM from 'react-dom';

    import App from './app.js'

    // 将组件渲染到页面中
    ReactDOM.render(<App />,document.getElementById('root'))
```

## 配置 文件扩展名 是否可省略
```
    // 配置扩展名是否可省略
    // alias - 绝对路径 / extensions - 文件后缀省略配置
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        },
        extensions: [".js", ".jsx", ".json"]
    }
```


## 数据类型检测 
```
    对传递的数据检查
    cnpm i prop-types -S

    import PropTypes from 'prop-types'

    class XX extends React.Component {}

    XX.propTypes = {
    msg: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
    }

    export default XX

```

## 上下文

```
    上下文的作用： 解决层级较深的间接父子组件之间的数据传递问题，避免繁琐的使用 props 一层一层的传递

    使用步骤：
    1： 创建一个上下文
    import React from 'react';

    // React.createContext() - 可接收参数或者不填，参数时一个默认值
    const ThemeCtx = React.createContext()
    export default ThemeCtx

    2：在 组件中导入上下文，并传值
    // 导入上下文
    import ThemeCtx from '@/utlis/themes.js';

    <!-- 当创建一个上下文(ThemeCtx)组件对象上有一个组件 Provider(提供) ，将组件包裹在 Provider 中 -->
    <!-- 在Provider 组件上有一个属性 value，提供值给包裹的组件 -->
    <!-- Provider 组件属性 value 能都获取到 this.state -->
    <ThemeCtx.Provider value={this.state.theme.light}>
        <!-- TestContext 内部组件，被包裹的组件，不管是多少层组件 -->
        <!-- 都能获取到 Provider 组件属性 value 提供的值 -->
        <TestContext />
    </ThemeCtx.Provider>

    3：被传值组件
    // 先添加上下文 - 使用 contextType 方法
    CtxChild.contextType = ThemeCtx

    render(){
        // 当添加了上下文之后，就会有this.context 方法，里面有上下文传入的数据
        let theme = this.context
        return (
            // 上文文获取值方式一，将组件包裹传值
            <div style={{color: theme.foreground, background: theme.background}}>
                <div>我是上下文 CtxChild 子组件，是app组件的孙组件</div>
            </div>
        )
    }
```

## 函数式组件中使用函数

```
    function ChlidB(){
        // 在函数式组件中,使用函数不在需要this,只需要给事件函数
        function clickHandler(){
            console.log('我被点击了')
        }

        return (
            <div>
                <button onClick={clickHandler}>提交</button>
            </div>
        )
    }

```

## hooks

1、useState
```
import { useState } from 'react'
let [msg, setMsg] = useState('')
// msg是声明式变量
// setMsg()是函数，相当于 this.setState({msg}) 用于改变msg
// useState('') 设置声明式变量的初始值
```

2、useEffect(副作用)
作用：让函数式组件拥有生命周期的特性。相当于以下三个生命周期的结合。
componentDidMount  是useEffect第一个函数参数中的语句代码
componentDidUpdate  是useEffect的第二个数组参数
componentWillUnmount  是useEffect第一个函数参数中的return语句

```
import React, { useState, useEffect } from 'react'

let [count, setCount] = useState(20)

useEffect(()=>{
  // componentDidMount
  // 调接口，开启长连接、开启定时
  // 做其它初始化的业务逻辑
  timer = setInterval(()=>{
    count++
    setCount(count)
  }, 1000)

  // componentWillUnmount
  return ()=>{
    // 清除长连接、清除定时器
    clearInterval(timer)
  }
  }, [count])  // componentDidUpdate
```

## React 路由

```
    安装react router
    总共是由三个包，一般都是直接安装 react-router-dom
    react-router 核心组件
    react-router-dom 应用于浏览器端的路由库（单独使用包含了react-router的核心部分）
    react-router-native 应用于native端的路由

    安装react-router-dom
    cnpm i react-router-dom -S

    react router 越来越组件化，也就是说 react-router-dom 提供了大量的组件

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


## 代码分割 (类似与路由懒加载)

```
    1: 安装
    cnpm install @loadable/component -S
    还要依赖2个包，
    2: 安装动态import的Babel插件
        cnpm install @babel/plugin-syntax-dynamic-import -D
        配置 .babelrc.json：
        ```
            {
            "plugins": ["@babel/plugin-syntax-dynamic-import"]
            }
        ```
        
        安装ESlint解析器
        cnpm install babel-eslint -D
        配置 .eslintrc.json：
        ```
        {
        "parser": "babel-eslint"
        }
        ```

    3: 语法：
    // 导入代码分割包 
    import loadable from '@loadable/component';
    // 代码分割  
    const TestJsx = loadable(()=>import('./study/TestJsx'));
    
    
```

## antd的使用

cnpm install antd -S

在App.js中引入样式文件：
```
import 'antd/dist/antd.css'
```


## mobx 状态管理

1： 安装
cnpm install mobx -S

2：创建 store 状态管理
新建 store/modules目录、 store/index.js
```
// store/index.js
class Store {
  constructor() {
    this.ChildStore = new ChildStore()
  }
}
export default new Store()
```
```
// store/modules/ChildStore.js

import { observable } from 'mobx'
export default class ChildStore {
  @observable count = 1
}
```

3、解决环境中不支持 @ 装饰器语法的问题
cnpm install @babel/plugin-proposal-decorators -D
cnpm install @babel/plugin-proposal-class-properties -D

配置 .babelrc.json
```
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]
```

4、把store与整个应用程序关联起来（基于上下文）

cnpm install mobx-react -S
```
// App.js
import { Provider } from 'mobx-react'
import store from '@/store'

render() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
```

5、在组件中使用store数据
```
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {}
export default Home
```

6、如何操作store（数据更新）？
```
// store/modules/ChildStore.js

import { abservable, action } from 'mobx'
export default class ChildStore {
  @abservable msg = ''
  @action changeMsg(payload) {
    this.msg = payload
  }
}
```
然后在页面组件中，就可以使用 this.props.store.ChildStore.changeMsg() 来操作store了。
```

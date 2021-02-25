import React from 'react';

// 导入 ant design
import 'antd/dist/antd.css'
// 导入上下文
import ThemeCtx from '@/utlis/themes.js';

// 导入 路由布局组件
import { Layout } from '@/components/index';
// 路由：URL格式为Hash路由组件，(可以使用<HashRouter>将上下文包裹起来)
import { HashRouter } from 'react-router-dom';

// mobx 状态管理
// Provider 是将整个应用程序与store管连起来
import { Provider } from 'mobx-react';
import store from '@/store/index';


// 定义一个 Recat 根组件
export default class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            theme: {
                light: {
                  foreground: '#000000',
                  background: '#eeeeee',
                },
                dark: {
                  foreground: '#ffffff',
                  background: '#222222',
                },
              }
        }
    }
    render(){
        return (
            <HashRouter>
                {/* mobx 状态管理 */}
                <Provider store={store}>
                    {/* 学习上下文 */}
                    {/* 当创建一个上下文(ThemeCtx)组件对象上有一个组件 Provider(提供) ，将组件包裹在 Provider 中*/}
                    {/* 在Provider 组件上有一个属性 value，提供值给包裹的组件 */}
                    {/* Provider 组件属性 value 能都获取到 this.state */}
                    <ThemeCtx.Provider value={this.state.theme.light}>
                        {/* TestContext 内部组件，被包裹的组件，不管是有多少层组件 */}
                        {/* 都能获取到 Provider 组件属性 value 提供的值 */}
                        {/* <TestContext /> */}


                        {/* 学习 React 路由 */}
                        {/* 使用 <HashRouter> 来包裹业务组件 */}
                        <Layout />

                    </ThemeCtx.Provider>
                </Provider>
                
            </HashRouter>
        
        )
    }
}


// {/* 学习 jsx */}
// {/* <TestJsx /> */}

// {/* 学习 props 和 state */}
// {/* <TestProps /> */}

// {/* 学习 事件处理 */}
// {/* <TestEvent /> */}

// {/* 学习React父子组件通信 */}
// {/* <Messaging /> */}

// {/* 学习条件渲染 */}
// {/* <TestCondition /> */}

// {/* 列表循环 */}
// {/* <TestList /> */}

// {/* 表单学习 */}
// {/* <TestForm /> */}

// {/* React 生命周期 */}
// {/* <TestFileCycle /> */}

// {/* 状态提升 */}
// {/* <TestLift /> */}

// {/* 学习 React 组合 */}
// {/* <TestCombination /> */}

// {/* 学习高阶组件 */}
// {/* <TestHoc /> */}

// {/* 学习 片段 */}
// {/* <TestFragments /> */}

// {/* 学习 Hooks */}
// {/* <TestHooks /> */}
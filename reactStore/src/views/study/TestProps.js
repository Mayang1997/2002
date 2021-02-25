import React from 'react';
import { Child } from '@/components/index'

export default class TestProps extends React.Component{
    constructor(props){
        super(props)

        // this.State: 声明式变量,当声明式变量发生变化,视图也发生变化 (单向变化)
        this.state = {
            msg: '我是在 this.state 中的声明式变量',
            run: '动态组件'
        }
    }

    // 改变 msg 点击函数
    // 在 React 中,this.setState是专门用来改变 this.state 的
    // 且 this.setState 是一个异步函数 可以接收两个参数
    clickHandler(){
        this.setState({
            msg: Math.random().toFixed(4) 
        })
    }


    render(){
        // 使用 ES6 的结构赋值方式获取 声明式变量,就不在需要学 this.state.msg 了
        let { msg,run } = this.state;
        return (
            <div>
                { msg } 
                <button onClick={this.clickHandler.bind(this)}>改变msg</button>

                {/* 插入子组件: props可以实现父子组件传值 */}
                {/* 父组件动态传值给子组件 */}
                {/* foo是静态传值 run是动态传值 */}
                <Child foo='静态传值' run={run}>

                    {/* 在子组件的内部嵌入 jsx 变量,那么在子组件中需要使用 props.children 来接收父组件传入的 jsx 变量 */}
                    {/* 可以传入多个 */}
                    <a href='www.baidu.com'>百度一下</a>
                    <a href='https://react.docschina.org/'>React中文网</a>
                </Child>
                
            </div>
        )
    }
}
// React 定义组件的方法
/* 
    类组件 
    函数式组件(无状态组件)
    Hooks 组件
    ES5 组件   React.createElement()
    高阶组件
*/

// jsx 的理解
/* 
    jsx可以式一个变量,也式一个对象,jsx更可以是表达式,可以在打括号中放置有效的javascript表达式
    在jsx的内部也可以使用表达式,并且可以任意嵌入 jsx 变量
    jsx可以防止注入攻击,可以安全的插入用户的输入
*/

import React from 'react';

// jsx语法: 定义变量 
// 在外部定义变量的方式,插入到render中,需要 {} 把变量包起来生效
// 注意: jsx 变量在 render 中需要一个根元素,否则报错
const div = <div>树叶的一生,只是为了归根嘛?</div>

// jsx 嵌入表达式
const name = '我是name';
const ele = <div>name被嵌入在另外一个jsx变量中, name在这里: {name}</div>

// 子组件需要在根组件中加载生效
export default class TestJsx extends React.Component{
    constructor(props){
        super(props)

        // React 中定义声明式变量在 this.state 中,并且被放置在 constructor 中
        this.state = {
            msg: '我是声明式变量 msg',
            color: 'red',
            style: {color: 'black', fontSize: '26px'}
        }
    }
    clickHandler(){
        // 在react中,setState可以动态改变 this.state 里的声明是变量
        this.setState({
            color: 'blue'
        })
    }

    // jsx变量
    createChild(){
        return (
            <div>
                <span>我是在类组件中jsx的变量</span>
                <span>并且我可以任意嵌入jsx变量,如下: </span>
                {this.state.msg}
                {name}
            </div>
        )
    }

    render(){
        return (
            <div>
                {div}
                {ele}
                {/* 在React中使用注释的方式 */}
                <div> {this.state.msg}</div>
                <div title='jsx'>给jsx添加静态属性</div>
                <div className={this.state.color}>给jsx添加动态属性,使用大括号包裹动态变量</div>

                {/* 动态切换背景颜色,注意绑定事件的方式请使用小驼峰命名 */}
                <button onClick={this.clickHandler.bind(this)}>切换颜色</button>

                {/* 插入jsx变量 */}
                {this.createChild()}

                {/* 嵌入静态样式: 使用大括号包括样式对象 */}
                <div style={{color: 'orange',fontSize: '30px'}}>我是静态的样式</div>

                {/* 嵌入动态样式: 使用this.state的方式获取 */}
                <div style={this.state.style}>我是动态的样式</div>
            </div>
        )
    }
}
import React from 'react';

import Model from '@/components/combination/Model'

// 学习组合
/* 
    在React 的实践开发中，要实现组件的复用使用的是组合，而并非继承
    props 是父组件与子组件传递信息的桥梁
    在使用组合实现组件复用时， props 传递的时jsx或者自定义组件
*/

// 封装功能的共性
// 类似与 vue 的插槽
// 封装各个部位的组件
function Titles(props){
    return (
        <div className='model-top'>
            <span>{props.text}</span>
            <span onClick={props.onClick}>X</span>
        </div>
    )
}

// 封装主题内容
function Content(props){
    return (
        <span>{props.text}</span>
    )
}

// 封装按钮
function Btn(props){
    return (
        <span className='btn' style={{background: props.bgcolor}} onClick={props.onClick} >
            {props.text}
        </span>
    )
}


export default class TestCombination extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            msg: '你确定要删除嘛？'
        }
    }

    // 隐藏显示按钮
    clickHandler(){
        console.log('点击')
    }

    // 提交事件
    btnHandler(){
        console.log("提交")
    }

    // 弹框
    popoutHandler(){
        
    }

    render(){
        let { msg } = this.state
        return (
            <div>
                <div>React 组合</div>

                {/* 开关 */}
                <div onClick={this.popoutHandler.bind(this)}>打开弹框</div>

                <Model
                tit={<Titles text='警告' onClick={this.clickHandler.bind(this)} />} 
                con={<Content text={msg} />}
                fot={<Btn text='确定' onClick={this.btnHandler.bind(this)} bgcolor='green' />}
                cancel={<Btn text='取消' onClick={this.btnHandler.bind(this)} bgcolor='red' />}
                />

            </div>       
        )
    }
}
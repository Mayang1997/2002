import React from 'react';

import { LiftA, LiftB } from '@/components/index';

// 状态提升： 通常多个组件需要共享数据，可以将共享状态提升到最近的共同的父组件中
// 状态提升实际上是解决组件之间通信的问题

export default class TestLift extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            msg: ''
        }
    }

    // 父组件管理子组件共享数据处理函数
    parentChange(val){
        // 接收到子组件传递过来的信息，实现通信
        // 子组件一与二共享数据，有父组件传递
        this.setState({msg: val})
    }

    render(){
        let { msg } = this.state;

        return (
            <div>
                <div>React 状态提升</div>

                {/* 将数据传入到子组件中，子组件通过 props 来接收父组件传递的数据，自定义事件的传递也是一样的 */}
                {/* 将自定义事件 onChange 分别传递到子组件A与B中，子组件通过props来接收自定义事件 */}

                {/* 状态提升A组件 */}
                <LiftA msg={msg} onChange={this.parentChange.bind(this)} />

                <hr></hr><br></br>
                {/* 状态提升B组件 */}
                <LiftB msg={msg} onChange={this.parentChange.bind(this)} />
            </div>
        )
    }
}
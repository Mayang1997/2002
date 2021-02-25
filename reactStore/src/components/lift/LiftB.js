import React from 'react';


export default class LiftB extends React.Component{

    // liftB 表单事件处理函数
    changeHandler(e){
        this.props.onChange(e.target.value)
    }

    render(){
        let { msg } = this.props
        return (
            <div>
                <div>我是子组件 LiftB</div>
                <input value={msg} onChange={this.changeHandler.bind(this)} ></input>
            </div>
        )
    }
}
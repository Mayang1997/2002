import React from 'react';
import PropTypes from 'prop-types'

//  PropTypes 类型检测

class LiftA extends React.Component{

    // liftA 表单事件处理函数
    changeHandler(e){
        // 在子组件的事件处理函数中，使用 this.props 获取父组件传递过来的自定义事件
        // 通过自定义事件 onChange 来向父组件发送信息
        this.props.onChange(e.target.value)
    }

    render(){
        // 子组件解构父组件传递过来的数据
        let { msg } = this.props;

        return (
            <div>
                <div>我是子组件 LiftA</div>
                <input value={msg} onChange={this.changeHandler.bind(this)} ></input>
            </div>
        )
    }
    
}

// 类型检测 - 规定 msg 变量必传，否则报错
// 类型检查可以链式调用
// msg 除了必填以外，还必须时字符串类型
LiftA.propTypes = {
    msg: PropTypes.string.isRequired
}
export default LiftA
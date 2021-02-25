import React from 'react';
import { Langs } from '@/components/index';
 
export default class Messaging extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: 1
        }
    }

    // 自定义事件回调函数,接收子组件传入父组件的数据
    changeHandler(id){
        // 在父组件中,使用箭头函数,如果不填 e 事件对象,会无法获取子组件传入的参数
        // 使用 this.setState 来改变 this.state 中的声明式变量
        this.setState(
            {id: id}
        )
    }

    render(){
        let { id } = this.state;
        return (
            <div>
                {/* 父子组件通信案例 */}
                {/* 动态传值  父组件自定义事件传入子组件中(在这里自定义事件为 onChange) */}
                {/* 那么在子组件 props 中,必然有 onChange 事件 */}
                <Langs id={id} onChange={(e)=>this.changeHandler(e)} />
            </div>
        )
    }
}
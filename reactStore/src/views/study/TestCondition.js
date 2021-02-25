import React from 'react';


// 条件渲染
/* 
    在 React 中条件渲染的方式有很多中
    如 javascript中的 if ，switch， 三目运算符，一元运算符，事件绑定 boolen值切换，运算符 && display等
    方法很多
*/
export default class TestCondition extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            ifBool: true,
            switchId: 1,
            sBool: true,
            oneBool: true,
            ysBool: true,
            show: "block"
        }
    }

    // if 条件渲染
    ifShow(bool){
        if(bool){
            return ( <div>if条件为 true 时显示</div> )
        }else {
            return ( <div>if条件为 false 时显示</div> )
        }
    }

    // switch 条件渲染
    switchShow(id){
        switch (id){
            case 1: 
                return ( <div>switch 条件为1显示</div> )
            case 2: 
                return ( <div>switch 条件为2显示</div> )
            case 3: 
                return ( <div>switch 条件为3显示</div> )
            case 4: 
                return ( <div>switch 条件为4显示</div> )
        }
    }

    // 一元表达式
    oneShow(bool){
        if(!bool) return (<div>一元表达式为 false 时显示</div>);
        return (<div>一元表达式为 true 时显示</div>)
    }

    render(){
        let { ifBool,switchId,sBool,oneBool,ysBool,show } = this.state

        return (
            <div>
                <div>学习React条件渲染</div>

                {/* if 条件渲染 */}
                { this.ifShow(ifBool) }
                
                {/* switch 条件渲染 */}
                { this.switchShow(switchId) }

                {/* 三目运算符 */}
                { sBool ? <div>三木运算符判断为true显示</div> : <div>三木运算符判断为false显示</div> }

                {/* 一元表达式 */}
                { this.oneShow(oneBool) }

                {/* 运算符 && 条件渲染 */}
                { ysBool && <div>运算符 && 前置变量为true显示</div> }

                {/* display: block / none 渲染*/}
                <div style={ { display: show } }>动态切换 display 来显示隐藏</div>
            </div>
        )
    }
}
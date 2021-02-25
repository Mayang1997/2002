import React from 'react';


// 学习片段 - 可以返回多个根组件
// 一般用来返回多个组件 - 使用 React.Fragment 来包裹多个组件并返回,或者使用语法糖 <></>,同样有效


// 定义两个函数式组件
function ChlidA(){
    return (
        <div>
            <div>学习 片段Fragments</div>
        </div>
    )
}

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

export default class TestFragments extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <React.Fragment>
                <ChlidA />
                <ChlidB />
            </React.Fragment>
        )
    }
}
import React from 'react';

// 封装函数式组件(无状态组件)
/* 
    函数式组件的特点:
        1: 没有状态 state
        2: 没有生命周期 (所以无法使用 render,constructor等生命周期)
        优点: 性能好 , 这是React优化性能的方式之一
*/

// props : 式联系父子组件之间的纽带, 且props式只读属性,不能修改

export default function Chlid(props){
    // 在这里没有 render 直接 return 返回jsx对象
    return (
        <div>
            <div>我式一个函数式子组件</div>

            {/* 静态 */}
            <div>{props.foo}</div>
            {/* 动态传值 */}
            <div>{props.run}</div>

            {/* 使用props.children 来接收父组件传入的 jsx 变量 */}
            {props.children}
        </div>
    )
}
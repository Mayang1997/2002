// Hooks: 实际上就是一套 Api, 专门提供给函数式组件使用的
// hookS作用：就是让函数式组件能够有状态state，生命周期，上下文等。

/* 
    常用的Api
    1：useSteta 
        
        使用语法：const [state, setState] = useState(initialState);
        state - 定义的生命式变量
        setState - 专们用来修改当前声明式变量的方法，注意：set 后的声明式变量首字母大写
        useState(initialState) - initialState 为初始化值，相当于定义声明式变量时初次赋的值
        在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state。

    2：useEffect(副作用)

        useEffect是三个生命周期函数的结合 componentDidMount + componentDidUpdate + componentWillUnmount
        componentDidMount - 作为 useEffect 的第一个函数参数中的语句代码
        componentDidUpdate - 作为 useEffect 的第二个数组参数中的元素，每一个元素代表一个声明式变量，当状态发生变化时，才会重新执行useEffect
        componentWillUnmount - 作为 useEffect 的 return 语句，可返回 undefined 或者函数，常用来销毁长链接和定时器
*/

// 导入hooks的 Api 
import React, { useState, useEffect } from 'react';

export default function Hooks(props){

    // 使用Hooks的api useState 来定义声明式变量
    let times;
    let [count,setCount] = useState(100)
    let [list,setList] = useState([])

    // 在函数式组件中 创建函数的方式为直接 function 创建
    // clickHandler 事件处理函数
    function clickHandler(){
        // hooks useState修改状态的方式，使用状态专门的修改方式
        count++
        setCount(count)
    }

    // 列表渲染
    function createList(){
        return (
            list.map(item=>(
                <div key={item.toString()}>
                    {item}
                </div>
            ))
        )
    }



    // useEffect使用语法： useEffect(fn, [])
    useEffect(()=>{
        // 在useEffect中的第一个函数参数相当于 挂载阶段 componentDidMount()
        times = setTimeout(()=>{
            setList([1,2,3,4,5])
        },3000)

        // 在 useEffect 函数中，return 相当于 销毁阶段 componentWillUnmount()
        return ()=>{
            clearTimeout(times)
        }

        // useEffect 函数中的第二个数组参数相当于 componentDidUpdate()
        // 当 监听的元素发生变化时，更新元素
    },[count])

    return (
        <div>
            <div>学习 Hooks</div>
            <div>
                <span>{count}</span><button onClick={clickHandler}>修改 count</button>
            </div>

            {createList()}
        </div>
    )
}
import React from 'react';


// React 生命周期

/* 
    React 生命周期注意分三大阶段
    挂载，更新，销毁阶段

    一：挂载阶段

        1：constructor 第一个加载的生命周期函数：
            组件被加载前最先被调用，constructor中完成了对React数据的初始化，也就是this.state，props

        2: static getDerivedStateFromProps() - 此函数表示从父组件接收 props，state 时触发此函数，并不常用

        3：render - 解析数据，创建虚拟dom，进行diff算法，更新dom树都在此进行
            在组件挂载之前，render解析数据创建虚拟DOM并渲染数据到真实DOM中，过程中，能访问state和props，但是不能修改

        4: componentDidMount - 组件挂载到真实DOM树上后立即执行，此时DOM节点已存在，可以在此函数中，请求数据，操作dom元素等
    
    二：更新阶段

        1: static getDerivedStateFromProps() -表示接收到props后触发，不常用
        
        2: shouldComponentUpdate() - 此方法在 state 或者 props发生变化时，shouldComponentUpdate会在数据渲染前调用
            此方法需要返回布尔值，来判断数据是否渲染，默认情况情况下都时渲染数据
            此方法常用来作为性能优化的方式存在
            并且接收两个参数，分别为 nextProps 新的props nextState 新的数据 

        3：render() - 解析数据，更新数据，将数据插入到真实DOM中

        4：getSnapshotBeforeUpdate() - 

        5：componentDidUpdate() - 在数据更新完成后立即调用，首次更新不加载
            该方法可在数据更新后操作DOM元素
            接收 nextProps 作为第一个参数，也就是旧的，更新前的 props


    // 销毁阶段

        componentWillUnmount() - 此方法会在组组件销毁后立即调用
        常用来清楚定时器，长链接，取消数据请求等    
*/  


export default class TestFileCycle extends React.Component{
    // 挂载阶段
    constructor(props){
        super(props)
        console.log('constructor - 执行，并初始化数据this.state，并且只执行一次')
        this.state = {
            msg: '点击我更新state',
            count: 1
        }
    }

    // 挂在阶段： static getDerivedStateFromProps() 此方法表示父组件接收到 props 时触发函数
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFromProps - 在这里，组件已接收到更新的props,state，第二个触发的函数')
        return null
    }

    // 挂载阶段： render 此函数会解析数据，jsx等，渲染到真实Dom上
    render(){
        console.log('render - 在组件挂载之前，render解析数据创建虚拟DOM并渲染数据到真实DOM中，过程中，能访问state和props，但是不能修改')
        let { msg,count } = this.state
        return(
            <div>
                <div onClick={this.clickHandler.bind(this,count)}>{msg}</div>
                <div>{count}</div>
            </div>
        )
    }
    
    // 挂载阶段 componentDidMount - 挂载完成
    // 常用来ajax请求，建立长连接、开启定时器等操作
    componentDidMount(){
        console.log("componentDidMount - 挂载已完成")
    }


    // 更新阶段
    shouldComponentUpdate(nextProps,nextState){  
        console.log('shouldComponentUpdate - 数据是否更新')
        console.log(nextProps)   // 父组件传递过来值，未变化为Null
        console.log(nextState)   // 数据更新后的值
        return true  // 此函数必须 return true更新，false 不更新
    }

    // componentDidUpdate - 数据更新完成后立即调用
    componentDidUpdate(nextProps){
        console.log(nextProps)
        console.log("更新完成")
    }

    // 销毁阶段 - componentWillUnmount()
    //  此函数会在组件卸载及销毁之前直接调用
    componentWillUnmount(){
        console.log('组件已销毁')
    }
    

    // 更新state
    clickHandler(count){
        this.setState({count: count + Math.random().toFixed(2)})
    }
}
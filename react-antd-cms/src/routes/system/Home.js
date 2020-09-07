import React from "react";

// connect: 高阶组件(高阶函数)
/* 
    对组件进行修饰并返回一个新的组件 
*/
import { connect } from 'react-redux';
// 导入 action 生成器
import { setCount,delTodo,updTodo } from '@/store/actions/TodoAction';

// connect():是一个高阶函数,将外部的方法 state等映射进来,此函数接收两个参数
// mapStateToProps(satte) - 把state中需要共享的数据变成 this.props 的方式访问
function mapStateToProps(state){
    return {
        count: state.todo.count,
        list: state.todo.list
    }
}
// mapActionToProps(dispatch) - 把外部的 action 生成器方法,转换成this.props的方式 
// 转换后,那么在组件 Home 中,可以调用 cheange 的方法派发 action 了
function mapActionToProps(dispatch){
    return {
        // 派发一个 action 到 store中
        // 那么在this.props中就可以派发 action
        // 从 action生成器中 获取 action
        change: (payload)=>{dispatch(setCount(payload))},
        delTodo: (payload)=>{dispatch(delTodo(payload))},
        updTodo: (payload)=>{dispatch(updTodo(payload))},
    }
}

class Home extends React.Component{

    // 修改 reducer 中的satte数据,只能触发 action 来修改
    // 需要派发 dispatch 一个 action
    setCount(){
        this.props.change(2000)
    }

    // 删除
    remove(id){
        this.props.delTodo(id)
    }

    // 新增
    updateHandler(){
        this.props.updTodo({id: Date.now(), task: '打豆豆'})
    }

    // 将stroe中的数据渲染到页面中
    createList(){
        // 获取从store映射到this.props中的list
        let { list } = this.props;
        return list.map(item=>(
            <div key={item.id}>
                <span>{item.id}</span>
                <span>-</span>
                <span>{item.task}</span>
                <span onClick={this.remove.bind(this,item.id)}> X</span>
            </div>
        ))
    }

    render(){
        
        return (
            <div className='app-mycontent-home'>
                <div> Mayang 管理系统首页 </div>
                {this.props.count}
                <button onClick={this.setCount.bind(this)}>修改count</button>
                <hr></hr>
                <button onClick={this.updateHandler.bind(this)}>新增</button>
                {this.createList()}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(Home)
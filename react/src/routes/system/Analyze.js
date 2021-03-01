import React from "react";

// connect - 高阶组件,用于修饰组件并返回一个新组件
import { connect } from 'react-redux';

// 导入派发 action 任务
import { getGoodAll } from '@/store/actions/GoodAction';

// 用于映射 store 中得数据到 组件得this.props中
function mapStateToProps(state){
    return {
        // good 为 子reducer
        list: state.good.list
    }
}
// 用于将 派发action任务到当前组件中的 this.props中
function mapActionToProps(dispatch){
    return {
        // 此处为异步action 派发得第一个 action
        init: (params=>{dispatch(getGoodAll(params))})
    }
}

class Analyze extends React.Component{

    // 在组件得this.props中获取到 mapActionToProps 映射进来得派发方法
    // 发送请求
    componentDidMount(){
        this.props.init({page: 1, size: 4})
    }

    createList(list){
        if(!list) return
        
        return list.map(item=>(
            <div key={item._id}>
                <span>{item.create_time}</span>
                <span>-</span>
                <span>{item.cate}</span>
                <span>-</span>
                <span>{item.name}</span>
                <span>-</span>
                <span>{item.desc}</span>
            </div>
        ))
    }

    render(){
        let { list } = this.props.list
        return (
            <div className='app-mycontent-analyze'>
                <div> Mayang 数据分析页 </div>
                {/* 列表渲染 */}
                {this.createList(list)}  
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(Analyze)
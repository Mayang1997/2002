import React from 'react';

// 使用 mobx 状态管理中的数据
import { inject, observer } from 'mobx-react';

// inject: 注入，作用是把某一个或者多个子 stroe 中的数据注入到组件中去
// observer： 观察者，当被观察的被共享的 store 数据发生变化，本组件自动更新

// 注意顺序
@inject('store')
@observer

class Goods extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nav: [
                {id: 1, name: '手机数码'},
                {id: 2, name: '休闲时装'},
                {id: 3, name: '家具家装'},
                {id: 4, name: '美食甜品'},
            ]
        }
    }

    // 请求 goods列表
    componentDidMount(){
        let { UserStore } = this.props.store
        UserStore.getGoodList({page: 1, size: 4})
    }

    // nav 二级路由点击事件
    clickHandler(name){
        // 跳转二级路由 - 动态路由带入id
        this.props.history.push('/goods/detail/'+name)
    }

    createNav(){
        let { nav } = this.state
        return nav.map(item=>(
            <div key={item.id.toString()} onClick={this.clickHandler.bind(this,item.name)}>
                <span>{item.id}</span>
                <span>-</span>
                <span>{item.name}</span>
            </div>
        ))
    }

    // mobx 数据增减操作
    btnHandler(type){
        let { CountStore } = this.props.store
        if(type == 'add') return CountStore.addCount() 
        if(type == 'sub') return CountStore.subCount()  
    }

    // 生产商品列表
    createGoodList(){
        let { UserStore } = this.props.store
        // console.log(UserStore.goodList)
        return UserStore.goodList.map(item=>(
            <div>
                <div>{item.name}</div>
            </div>
        ))

    }


    render(){
        let { CountStore } = this.props.store
        return (
            <div>
                <div>React 二级路由</div>
                {this.createNav()}
                <hr></hr>
                <div>
                    <span>{CountStore.count}</span>
                    <button onClick={this.btnHandler.bind(this,'add')}>增</button>
                    <button onClick={this.btnHandler.bind(this, 'sub')}>减</button>
                </div>

                {this.createGoodList()}
            </div>
        )
    }
}

export default Goods
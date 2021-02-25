import React from 'react';

// 导入路由管理
import routes from '@/views/index'
// 路由跳转 - NavLink
import { NavLink } from 'react-router-dom';


export default class Aside extends React.Component{
    constructor(props){
        super(props)
    }

    // 遍历集成的路由 - 生成 NavLink 列表
    // replace - 解决多次push相同的路径
    createNavLink(){
        return routes.map(item=>(
            <div key={item.id}>
                <NavLink 
                activeClassName='on'
                replace
                to={item.path}>
                    {item.text}
                </NavLink>
            </div>
        ))
    }
    

    render(){
        return (
            <div className='root-aside'>
                {/* 
                    NavLink 跳转路由属性
                    to - 跳转到指定的路由
                */}
                { this.createNavLink() }
            </div>
        )
    }
}
import React from 'react';


// 导入路由
import routes from '@/views/index'

// 导入各个组件
// Route - 路由容器 
// Switch - 包裹 Route 的直接父组件，更安全，只匹配一条路由
// Redirect - 重定向
// withRouter - 用于未被 Route 包裹的路由能获取路由跳转的api，比如push，go，boback，hash等。
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

export default class Main extends React.Component{

    // 生成路由容器中对应的的路由
    createRoute(){
        let arr = [];
        // 注意：当使用 Switch 包裹 路由的时候，Route不能被元素包裹，否者报错
        // exact 严格匹配
        routes.map(item=>{
            arr.push(<Route 
                key={item.id}
                path={item.path}
                exact
                component={item.component}>
            </Route>)
            if(item.children) {
                item.children.map(ele=>{
                  arr.push(
                    <Route
                      key={ele.id}
                      path={ele.path}
                      component={ele.component}
                      exact
                    />
                  )
                })
            }
        })
        return arr
    }


    render(){
        return (
            <div className='root-main'>
                {/* 
                    路由容器 Route 的属性
                    path - 指定路由路径
                    component: 路由
                */}
                <Switch>
                    {this.createRoute()}
                    {/* 重定向 */}
                    <Redirect from='*' to='/jsx' />
                </Switch>
            </div>
        )
    }
}
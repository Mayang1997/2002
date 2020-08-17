import React from "react";
// 导入路由
import routes from '@/routes/index';
// import { fetchGoodList } from '@/utils/api';
// 引入路由容器
/* 
    Route: 路由容器 - exact 精确匹配
    Switch：包裹 Route，使其更精确
    Redirect： 重定向
*/
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

export default class Content extends React.Component{

    // componentDidMount(){
    //     fetchGoodList({page: 1,size: 4}).then(res=>{
    //         console.log(res)
    //     })
    // }

    // createRoute 根据路由，生成视图
    createRoute(){
        // 放置路由的数组
        let arr = [];

        // 递归：遍历深层次的路由
        function recursionRoute(children){
            if(!children) return 
            children.map(ele=>{
                // 将路由 push 到数组中
                arr.push(<Route exact key={ele.id} path={ele.path} component={ele.component} />)
                if(!ele.children) return false
                recursionRoute(ele.children)
                return false
            })
        }

        // 递归遍历 routes 下的 children 
        routes.map(item=>{
            // 遍历每个元素，将 children 下有路由的 push 到 arr 中
            // 递归直到当前循环 children 下没有路由，遍历下一次，直到遍历完成
            recursionRoute(item.children)
            return false
        })
        return arr
    }

    render(){
        return (
            <div className='app-mycontent'>
                <Switch>
                    {this.createRoute()}
                    {/* 重定向 */}
                    <Redirect from='/*' to='/home' />
                </Switch>
            </div>
        )
    }
}
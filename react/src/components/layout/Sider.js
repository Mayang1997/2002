import React from "react";

// 导入集成路由 / 导入路由跳转
import routes from '@/routes'
// replace - 防止多次重复点击 Link  或者 NavLink，因为浏览器不会将同样的路径 push 到 stack 里
import { Link } from 'react-router-dom';

// 导入 img
import imgs from '@/utils/imgs';
// Menu 导航菜单
import { Menu } from 'antd';
const { SubMenu } = Menu;


export default class Sider extends React.Component{

    // 创建子菜单列表
    createSubmenu(children){
        if (!children) return
        // children 存在时，生成子菜单
        return children.map(ele=>(
            <Menu.Item
            icon={ele.icon}
            key={ele.id}>
                {/* 创建路由跳转 */}
                <Link to={ele.path} replace>{ele.text}</Link>
            </Menu.Item>
        ))
    }

    // 创建菜单
    createMenu(){
        return routes.map(item=>(
            <SubMenu
                title={item.text}
                icon={item.icon}
                key={item.id}>
                {/* 生成子菜单，判断路由中是否存在 children */}
                {this.createSubmenu(item.children)}
            </SubMenu>
        ))
    }

    render(){
        return (
            <div className='app-mysider'>
                <div className='app-mysider-logo'>
                    <img src={imgs.logo} alt='mylogo'></img>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark">
                        {/* 生成菜单 */}
                        {this.createMenu()}
                </Menu>
            </div>
        )
    }
}
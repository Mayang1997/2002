import React from 'react';
import loadable from '@loadable/component';
// icon 图标组件
import {
    GitlabFilled,
    HomeFilled,
    PieChartFilled,
    GoldFilled,
    DatabaseFilled,
    AndroidFilled,
    TeamOutlined,
    CrownOutlined,
    SolutionOutlined,
} from '@ant-design/icons';
// 代码分割
const Home = loadable(()=>import('./system/Home'));
const Analyze = loadable(()=>import('./system/Analyze'));

// good
const AddGood = loadable(()=>import('./goods/AddGood'));
const GoodList = loadable(()=>import('./goods/GoodList'));


// 集成路由
const routes = [
    {
        id: 1,
        text: 'MaYa 系统概况',
        icon: <GitlabFilled />,
        children: [
            {
                id: 101,
                path: '/home',
                component: Home,
                text: '首页管理',
                icon: <HomeFilled />
            },
            {
                id: 102,
                path: '/analyze',
                component: Analyze,
                text: '数据分析',
                icon: <PieChartFilled />
            }
        ]
    },
    {
        id: 2,
        text: '商品管理',
        icon: <GoldFilled />,
        children: [
            {
                id: 201,
                path: '/good/list',
                component: GoodList,
                text: '商品列表',
                icon: <DatabaseFilled />,
                children: [
                    {
                        id: 202,
                        path: '/good/list/:id',
                        component: AddGood,
                        text: '商品新增',
                    }
                ]
            },
            
        ]
    },
    {
        id: 3,
        text: '系统管理',
        icon: <AndroidFilled />,
        children: [
            {
                id: 301,
                path: '/role',
                component: '',
                text: '角色管理',
                icon: <CrownOutlined />
            },
            {
                id: 302,
                path: '/power',
                component: '',
                text: '权限管理',
                icon: <SolutionOutlined />
            },
            {
                id: 303,
                path: '/users',
                component: '',
                text: '用户管理',
                icon: <TeamOutlined />
            },
        ]
    }
]

export default routes
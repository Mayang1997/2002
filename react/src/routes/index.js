import React from 'react';
import loadable from '@loadable/component';
// icon 图标组件
import {
    GitlabFilled,
    HomeFilled,
    PieChartFilled
} from '@ant-design/icons';
// 代码分割
const Home = loadable(()=>import('./system/Home'));
const Analyze = loadable(()=>import('./system/Analyze'));


// 集成路由
const routes = [
    {
        id: 1,
        text: 'MaYa 系统管理',
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
    }
]

export default routes
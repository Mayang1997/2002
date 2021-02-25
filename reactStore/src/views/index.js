// 集成路由，便于管理

// 导入代码分割包
import loadable from '@loadable/component';
import { Children } from 'react';
// 代码分割 
const TestJsx = loadable(()=>import('./study/TestJsx'));
const TestProps = loadable(()=>import('./study/TestProps'));
const TestEvent = loadable(()=>import('./study/TestEvent'));
const Messaging = loadable(()=>import('./study/Messaging'));
const TestCondition = loadable(()=>import('./study/TestCondition'));
const TestList = loadable(()=>import('./study/TestList'));
const TestForm = loadable(()=>import('./study/TestForm'));
const TestFileCycle = loadable(()=>import('./study/TestFileCycle'));
const TestLift = loadable(()=>import('./study/TestLift'));
const TestCombination = loadable(()=>import('./study/TestCombination'));
const TestContext = loadable(()=>import('./study/TestContext'));
const TestHoc = loadable(()=>import('./study/TestHoc'));
const TestFragments = loadable(()=>import('./study/TestFragments'));
const TestHooks = loadable(()=>import('./study/TestHooks'));

// 商品操作
const Goods = loadable(()=>import('./good/Goods'));
const GoodDetail = loadable(()=>import('./good/Detail'));

// 状态管理
const TodoList = loadable(()=>import('./good/TodoList'));

// 定于路由
const routes = [
    {id: 1, path: '/jsx', component: TestJsx, text: '学习jsx', icon: '',},
    {id: 2, path: '/props', component: TestProps, text: '学习state与props', icon: ''},
    {id: 3, path: '/event', component: TestEvent, text: '学习事件机制', icon: ''},
    {id: 4, path: '/messaging', component: Messaging, text: '学习父子组件传值', icon: ''},
    {id: 5, path: '/condition', component: TestCondition, text: '学习条件渲染', icon: ''},
    {id: 6, path: '/list', component: TestList, text: '学习列表渲染', icon: ''},
    {id: 7, path: '/form', component: TestForm, text: '学习react表单', icon: ''},
    {id: 8, path: '/file', component: TestFileCycle, text: '学习react生命周期', icon: ''},
    {id: 9, path: '/lift', component: TestLift, text: '学习react状态提升', icon: ''},
    {id: 10, path: '/combination', component: TestCombination, text: '学习react组合', icon: ''},
    {id: 11, path: '/context', component: TestContext, text: '学习上下文', icon: ''},
    {id: 12, path: '/hoc', component: TestHoc, text: '学习高阶组件Hoc', icon: ''},
    {id: 13, path: '/fragments', component: TestFragments, text: '学习片段(碎片)', icon: ''},
    {id: 14, path: '/hooks', component: TestHooks, text: '学习HOOK', icon: ''},
    {
        id: 15, 
        path: '/goods', 
        component: Goods, 
        text: '商品列表', 
        icon: '',
        children:[
            {id: 1501, path: '/goods/detail/:name', component: GoodDetail, text: '商品详情', icon: ''}  // 二级动态路由
        ]
    },
    {id: 16, path: '/todolist', component: TodoList, text: 'mobx状态管理', icon: ''}
]

// 抛出路由
export default routes
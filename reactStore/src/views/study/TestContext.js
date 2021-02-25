import React from 'react';

// 导入子组件
import CtxChild from '@/components/childs/CtxChild';

export default class TestContext extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <div>学习 React 上下文</div>
                {/* 在 TestContext 组件中，并未向TestContext的子组件传值 */}
                {/* 而是通过 app 根组件的上下文传值到 孙组件中 */}
                {/* 这样就避免了使用 props 的层级传递问题 */}
                <CtxChild />
            </div>
        )
    }
}
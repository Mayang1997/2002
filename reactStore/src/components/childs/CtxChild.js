import React from 'react';

// 导入上下文
import ThemeCtx from '@/utlis/themes.js'

class CtxChild extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        // 当添加了上下文之后，就会有this.context 方法，里面有上下文传入的数据
        let theme = this.context
        /* 
        // 方式一
        return (
            // 上文文获取值方式一，将组件包裹传值
            <div style={{color: theme.foreground, background: theme.background}}>
                <div>我是上下文 CtxChild 子组件，是app组件的孙组件</div>
            </div>
        ) */

        // 方式二
        // 使用箭头函数的方式 - 使用 ThemeCtx.Consumer 包裹jsx组件
        return (
            <ThemeCtx.Consumer>
                {
                    (theme)=>(
                    <div style={{color: theme.foreground, background: theme.background }}>
                        <h3>我的子组件</h3>
                    </div>
                    )
                }
            </ThemeCtx.Consumer>
        )

    }
}

// 方式一上下文获取值
// 先添加上下文 - 使用 contextType 方法
CtxChild.contextType = ThemeCtx

export default CtxChild
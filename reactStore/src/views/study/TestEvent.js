import React from 'react';

// 在React 中,事件都是以 on 开头,并且都是以小驼峰的方式命名

// 定义事件常用的的两种方式
/* 
    1: bind 方式改变 this 的指向: onClick={this.clickHandler.bind(this)}
    1: 箭头函数: onClick={()=>this.clickHandler()}
*/
// 事件对象 和 事件传参
/* 
    1: bind() 方式的 事件对象默认为 最后一个参数
    2: 箭头函数需要手动来加入参,一般也是写在最后一个参数
*/


export default class TestEvebt extends React.Component{
    constructor(props){
        super(props)
        
        // 声明式变量存放的地方
        this.state = {

        }

        // 事件绑定方式二 - 不常用
        this.clickHandler2 = this.clickHandler.bind(this, '方式二')
    }

    // 点击事件回调函数
    clickHandler(text, e){
        console.log(text, e)
    }

    // 阻止默认事件
    prevHandler(e){
        console.log('我阻止了a标签的跳转')
        e.preventDefault()
    }

    // 鼠标事件 keyup
    keyUpHandler(e){
        if(e.keyCode !== 13) return
        console.log(e.target.value)
        e.target.value = ''
    }

    render(){
        return (
            <div>
                <h1>React 事件</h1>
                <div onClick={this.clickHandler.bind(this, '方式一')}> 事件绑定方式一 </div>
                <div onClick={this.clickHandler2}> 事件绑定方式二 </div>
                <div onClick={(e)=>this.clickHandler('箭头函数', e)}> 事件绑定方式三 </div>

                {/* 阻止默认事件的方法与原生js一样 */}
                <div><a href='www.baidu.com' onClick={(e)=>this.prevHandler(e)}>百度一下</a></div>

                {/* 鼠标事件 e.keycode 获取键码 */}
                <div><input type='text' onKeyUp={(e)=>this.keyUpHandler(e)}></input></div>
            </div>
        )
    }
}
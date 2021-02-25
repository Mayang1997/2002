import React from 'react';

export default class Langs extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            lang: [
                {id: 1, type: '中文'},
                {id: 2, type: '法语'},
                {id: 3, type: '德语'},
                {id: 4, type: '韩语'}
            ]
        }
    }

    

    // 创建语言选择 tab 栏回调函数
    createLangs(){
        let { lang } = this.state
        // 父组件传给子组件的数据存放在 props,如果在 render 中,直接使用props,在其他回调函数中使用this.props
        let { id } = this.props

        // 在 React 中,列表的生成使用 map 方法,并且在生成的每一项元素时,都必须加 key,key的值是唯一
        // 注意: map 中的不再是 {}, => 指向的为()
        const langList = lang.map(item=>(
            <span 
                onClick={()=>this.clickHandler(item.id)}
                className={item.id === id ? 'on' : ''}
                key={item.id.toString()}>
                {item.type}
            </span>
        ))
        return (
            <div className='langs'>
                { langList }
            </div>
        )
    }

    // 点击事件回调函数: 父组件传值
    clickHandler(id){
        // 父组件传入子组件自定义事件,在 props 中获取
        // 点击时触发 父组件的自定义事件,并带入参数
        this.props.onChange(id)
    }

    render(){
        return (
            <div>
                { this.createLangs() }  
            </div>
        )
    }
}
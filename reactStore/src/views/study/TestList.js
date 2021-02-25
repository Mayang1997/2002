import React from 'react';


// 列表渲染： 在react 中，建议使用 map + 箭头函数的方式来进行列表渲染
export default class TestList extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            list: [
                {id: 1, name: 'jack'},
                {id: 2, name: 'tom'},
                {id: 3, name: 'felk'},
                {id: 4, name: 'bel'}
            ]
        }
    }

    // 列表循环 - 方式一
    // 在 React 中，jsx 的内部可以嵌套表达式，所以，请使用{}来包裹他
    // 在包裹的jsx中可以使用很多 js 的表达式
    createList(list){
        return (
            <div>
                {
                    list.map(item=>(
                        <div key={item.id}>
                            <span>{item.id}</span>
                            <span>-</span>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        )
    }

    // 列表方式二 在列表循环时，可以在其中插入表达式
    // 包括数据处理，逻辑处理
    createList2(list){
        list.forEach(ele=>{
            ele.class = "2002"
        })
        const ele = list.map(item=>(       
            <div key={item.id}>
                <span>{item.id}</span>
                <span>-</span>
                <span>{item.name}</span>
                <span>-</span>
                <span>{item.class}</span>
            </div>
        ))
        return (<div>{ele}</div>)
    }


    render(){
        let { list } = this.state

        return (
            <div>
                <div>列表渲染</div>

                {/* 列表循环 */}
                { this.createList(list) }

                <hr></hr>
                {/* 列表循环方式二 */}
                { this.createList2(list) }
            </div>
        )
    }
}
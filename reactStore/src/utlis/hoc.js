import React from 'react';

// 高阶组件/也被称为容器组件，高阶函数
// 高阶组件其实是一个纯函数，该函数接收两个参数
/* 
    参数一：是一个被包裹的组件
    参数二：通过 DataSource(数据源) 和当前的 props 返回我们需要的数据。
*/
// 注意：HOC 不会修改传入的组件，也不会使用继承来复制其行为

// 高阶组件的作用: 把组件中可以复用的业务组件逻辑抽离出来,方便复用和维护
// 被修饰的入参组件 WrappedComponent,被称为 UI 组件

// 纯函数接受一个组件
export default function Hoc(WrappedComponent, selectData){
    console.log(selectData)
    // 返回另一个组件
    return class extends React.Component{
        // 在这个新组件中有生命周期，state，props等
        // 还可以在组件中封装方法,调接口,存储用户信息等
        constructor(props){
            super(props)

            this.state = {
                msg: '修饰高阶组件组件'
            }
        }
        render(){
            return (
                <div>
                    <div> 高阶组件的内容 </div>

                    {/* 返回的新组件 */}
                    {/* 在高阶组件中可以对返回的新组建 WrappedComponent 进行一些修饰 */}
                    {/* 比如相同的请求数据,用户信息等 */}
                    <WrappedComponent msg={this.state.msg} />
                </div>
            )
        }
    }
}
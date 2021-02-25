import React from 'react';

// 导入高阶组件
// 高阶组件的作用很多，常用来修饰组件
import hoc from '@/utlis/hoc'


class TestHoc extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render(){
        return (
            <div>
                <div>学习 Hoc 高阶组件</div>
                {/* 此 msg 是由高阶组件传入 */}
                <div>{this.props.msg}</div>
            </div>
        )
    }
}

// 使用高阶组件来返回 TestHoc 组件
export default hoc(TestHoc)
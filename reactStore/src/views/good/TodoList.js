import React from 'react';

// 使用 mobx 状态管理中的数据
import { inject, observer } from 'mobx-react';

class TodoList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div>mobx 状态管理</div>
                <div className='todo'>
                    <div className='todo-top'>
                        <span></span><span>条任务</span>
                        <input type='test' ></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList
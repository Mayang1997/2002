import React from 'react';


//  学习表单
/* 
    在 React 中，分受控表单和非受控表单，建议我们使用受控表单
    1：受控表单： 就是与 表单的 value值 与state 形成关联，使value的值可控
    2：非可控表单：与state的没有联系
*/

// 注意：每一个表单都需要使用onChange事件配合使用，否则报错 

export default class TestForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            val: '',
            selval: '1',
            info:{
                myName: '',
                myPass: '',
                myPhone: '',
                myHobby: '',
                mySex: '1',
                myChecked: false,
            }
        }
    }

    // 表单的onChange事件
    changeHandler(e){
        this.setState({val: e.target.value})
    }

    // 按钮
    submitHandler(e){
        let ele = document.getElementById('texts')
        console.log(ele.value)
    }

    // 表单输入事件
    inputHandler(e){
        console.log(e.target.value)
    }

    // 下拉框
    selHandler(e){
        this.setState({})
    }

    // 获取表单的各项value
    changeMyFoem(key, e){
        let { info } = this.state
        if(key === 'myChecked') return info[key] = e.target.checked
        info[key] = e.target.value
        this.setState({info: info})
    }

    // form 提交
    submits(info){
        console.log(info)
    }

    render(){
        let { val,selval,info } = this.state
        return (
            <div>
                <div>表单的学习</div>

                {/* 可控表单：value与state形成紧密关联 */}
                {/* 每一个表单都需要使用onChange事件配合使用，否则报错 */}
                <input type='text' value={val} onChange={this.changeHandler.bind(this)} ></input><br></br>

                {/* 非可控表单 */}
                <input type='text' id='texts'></input> 
                <button onClick={this.submitHandler.bind(this)}>提交</button><br></br>
                <input type='text' onInput={this.inputHandler.bind(this)} ></input><br></br>

                {/* 唯一支持的非可控表单 */}
                <input type='file'></input><br></br>

                {/* 可控表单： 下拉框 */}
                <select value={selval} onChange={this.selHandler.bind(this)} >
                    <option value='1' >双皮奶</option>
                    <option value='2' >珍珠奶茶</option>
                    <option value='3' >金桔柠檬茶</option>
                </select>

                {/* 表单整套演示 */}
                <div>
                    <div>
                        <span>用户名：</span>
                        <input type='text' value={info.myName} onChange={this.changeMyFoem.bind(this,'myName')}></input>
                    </div>
                    <div>
                        <span>密码：</span>
                        <input type='password' value={info.myPass} onChange={this.changeMyFoem.bind(this,'myPass')}></input>
                    </div>
                    <div>
                        <span>手机：</span>
                        <input type='text' value={info.myPhone} onChange={this.changeMyFoem.bind(this,'myPhone')}></input>
                    </div>
                    <div>
                        <select value={info.myHobby} onChange={this.changeMyFoem.bind(this,'myHobby')} >
                            <option value='1' >双皮奶</option>
                            <option value='2' >珍珠奶茶</option>
                            <option value='3' >金桔柠檬茶</option>
                        </select>
                    </div>
                    <div>
                        <span>性别：</span>
                        <input 
                            name='sex'
                            type='radio' 
                            value='1'
                            checked={info.mySex === '1'}
                            onChange={this.changeMyFoem.bind(this,'mySex')} >
                        </input>
                        <span>男</span>
                        <input 
                            name='sex'
                            type='radio' 
                            value='2'
                            checked={info.mySex === '2'}
                            onChange={this.changeMyFoem.bind(this,'mySex')} >
                        </input>
                        <span>女</span>
                    </div>
                    <div>
                        <input type='checkbox' value={info.myChecked} onChange={this.changeMyFoem.bind(this,'myChecked')} ></input>
                        <span>同意条款</span>
                    </div>
                    <div>
                        <button onClick={this.submits.bind(this,info)} >提交</button>
                    </div>
                </div>
            </div>
        )
    }
}
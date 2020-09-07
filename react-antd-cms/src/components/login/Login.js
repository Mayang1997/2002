import React from 'react';

import '@/assets/css/Login.scss'
import { Form, Input, Button, Checkbox } from 'antd';
// 未被Route包裹的组件相使用this.props.history等api，需要使用 withRouter 高阶组件来修饰组件
import { withRouter } from 'react-router-dom';
import { fetchLogin } from '@/utils/api'

class Login extends React.Component {

    componentDidMount(){
        // 手动修改路由 url
        this.props.history.replace('/login')
    }

    // 表单登录
    onLigin(value){
        console.log(value)
        fetchLogin(value).then(res=>{
            this.props.history.push('/home')
            localStorage.setItem('token', res.token)
            // 在 react 组件中，执行自定义事件就是自动刷新组件
            this.props.onLogin()
        })

    }
    // 表单发生错误
    onFinishFailed(errorInfo ){
        console.log('Failed:', errorInfo);
    }

    render(){
        const layout = {
            labelCol: { span: 5},
            wrapperCol: { span: 14 },
          };
          const tailLayout = {
            wrapperCol: { offset: 5, span: 10 },
          };

        return (
            <div className='my-login'>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onLigin.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    
                    >
                    <Form.Item
                        label="账 号"
                        name="username"
                        className='form-label'
                        rules={[{ required: true, message: '请输入账号!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密 码"
                        name="password"
                        className='form-label'
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} valuePropName="checked" className='form-ckspan'>
                        <Checkbox >记住账号</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        )
    }
}

export default withRouter(Login)
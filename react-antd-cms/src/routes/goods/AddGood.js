import React from "react";

// connect - 高阶组件,用于修饰组件并返回一个新组件
import { connect } from 'react-redux';
import { MyCateSelect,MyUpload } from '@/components'
// 导入派发 action 任务
import { addGoods,getDetail } from '@/store/actions/GoodAction';


import { Form, Input, Button, InputNumber,Switch } from 'antd';
const { TextArea } = Input;



// 用于映射 store 中得数据到 组件得this.props中
function mapStateToProps(state){
    return {
        good: state.good.good
    }
}
// 用于将 派发action任务到当前组件中的 this.props中
function mapActionToProps(dispatch){
    return {
        addGood: (data)=>{dispatch(addGoods(data))},
        getDetail: (params)=>{dispatch(getDetail(params))}
    }
}

// 表单样式
const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 10,
    },
}

const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 10,
    },
};

class AddGood extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            info: {
                name:'',
                desc:'',
                price: 1000,
                cate:'请选择',
                img:'',
                hot:false,
                rank:0,
            }
        }
    }
    // 表单提交
    onFinish(value){
        console.log(value)
        // 提交表单后清空表单数据
        if(this.props.match.params.id !== '66'){
            value.id = this.props.match.params.id
            console.log(value)
            this.props.addGood(value)
            
        }else{
            this.props.addGood(value)
        }
        this.refs.form.setFieldsValue(this.state.info)
        this.props.history.goBack()
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        if(id !== '66'){
            this.props.getDetail({good_id: id})
        }else{
            this.refs.form.setFieldsValue(this.state.info)
        }
    }

    shouldComponentUpdate(props){
        this.refs.form.setFieldsValue(props.good)
        return true
    }

    componentWillUnmount(){
        this.refs.form.setFieldsValue(this.state.info)
    }

    onFinishFailed(errorInfo){
        console.log('Failed:',errorInfo)
    }

    // cate 获取
    ChangeCate(cate){
        this.setState({cate: cate})
    }

    UploadChange(url){
        console.log(url)
        this.setState({img: url})
    }

    render(){
        let {cate,img} = this.props.good
        return (
            <div className='app-mycontent-addgood'>
                <div> {this.props.match.params.id === '66' ? '新增商品' : '修改商品'} </div>
                <Form
                    {...layout}
                    name="basic"
                    ref='form'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                >
                    {/* 商品名称 */}
                    <Form.Item
                        label="商品名称"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品名称!',
                            },
                        ]}>
                        <Input />
                    </Form.Item>

                    {/* 商品描述 */}
                    <Form.Item
                        label="商品描述"
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品描述!',
                            },
                        ]}>
                        <TextArea rows={4} />
                    </Form.Item>

                    {/* 商品价格 */}
                    <Form.Item
                        label="商品价格"
                        name="price"   
                        rules={[
                            {
                                required: true,
                                message: '请输入商品价格!',
                            },
                        ]}               
                    >
                        <InputNumber
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                    </Form.Item>

                    {/* 下拉框 */}
                    <Form.Item
                        label="商品品类"
                        name="cate"
                        rules={[
                            {
                                required: true,
                                message: '请选择商品品类!',
                            },
                        ]}   
                    >
                        {<MyCateSelect value={cate} onChange={this.ChangeCate.bind(this)} />}
                    </Form.Item>
                    

                    {/* 图片上传 */}
                    <Form.Item
                        label="商品图片"
                        name="img"
                        rules={[
                            {
                                required: true,
                                message: '请上传商品图片!',
                            },
                        ]}  
                    >
                        <MyUpload value={'http://localhost:3000' + img} onChange={this.UploadChange.bind(this)} />
                    </Form.Item>

                    {/* 是否热销 */}
                    <Form.Item
                        label="是否热销"
                        name="hot" 
                        valuePropName='checked'
                    >
                        <Switch />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            {this.props.match.params.id === '66' ? '提交' : '修改'} 
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionToProps)(AddGood)
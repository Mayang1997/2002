import React from 'react';
import { connect } from 'react-redux';
import { getCateAll } from '@/store/actions/GoodAction';
import { Select } from 'antd';
const { Option } = Select;


// 用于映射 store 中得数据到 组件得this.props中
function mapStateToProps(state){
    return {
        cates: state.good.cates
    }
}
// 用于将 派发action任务到当前组件中的 this.props中
function mapActionToProps(dispatch){
    return {
        init: (payload)=>{dispatch(getCateAll(payload))}
    }
}

class MyCateSelect extends React.Component {

    // 初始化请求品类列表
    componentDidMount(){
        this.props.init({})
    }

    CateChange(val){
        this.props.onChange(val)
    }
    
    render(){
        let { cates } = this.props
        if(cates.constructor !== Array) return
        return (
            <Select
                defaultValue={'请选择'}
                style={{ width: 120 }}
                allowClear={true}
                onChange={this.CateChange.bind(this)}
                value={this.props.value}
                >
                {cates.map(item => (
                    <Option key={item.cate_zh}>{item.cate}</Option>
                ))}
            </Select>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(MyCateSelect)
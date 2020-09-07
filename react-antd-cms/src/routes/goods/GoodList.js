import React from "react";

// connect: 高阶组件(高阶函数)
/* 
    对组件进行修饰并返回一个新的组件 
*/
import { connect } from 'react-redux';
import '@/assets/css/GoodList.scss'
import { MyCateSelect} from '@/components'
import { getGoodAll } from '@/store/actions/GoodAction';
import { fetchDelGood } from '@/utils/api';
import img from '@/utils/imgs';
import { toDate } from '@/utils/date';

import { Row, Col, DatePicker,Table,Button,Modal } from 'antd';
const { RangePicker } = DatePicker;


function mapStateToProps(state){
    return {
        list: state.good.list
    }
}
function mapActionToProps(dispatch){
    return {
        init: (params)=>{dispatch(getGoodAll(params))},
    }
}

// 表格

class GoodList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            goodArr: [],
            filter: {
                cate: '',
                hot: false,
                page: 1,
                size: 3
            },
            show: false,
            delId: ''
        }
    }



    // 初始化数据
    componentDidMount(){
      let { filter } = this.state
      this.props.init(filter)
    }

    // 新增商品
    addGoods(){
      this.props.history.push('/good/list/'+ 66)
    }


    // 更新 filter
    updateFilter(key,val){
      let { filter } = this.state
      // 当 page 发生变化时 初始化为一
      if(key !== 'page') {
        filter.page = 1
      }
      filter[key] = val
      this.setState({filter})
      // 当 filter 的元素发生变化时，触发调接口
      this.props.init(filter)
    }

    // 品类发生变化
    ChangeCate(cate){
        this.updateFilter('cate',cate)
    }

    // page 变化
    pageChange(page){
      console.log(page)
      this.updateFilter('page',page)
    }

    // 修改商品列表
    skipToEdit(row){
      this.props.history.push('/good/list/'+ row._id)
    }
    // 弹框显示
    showModel(row){
      this.setState({show: true, delId: row._id})
      console.log(row)
    }

    handleCancel(){
      this.setState({show: false})
    }
    // 删除 商品
    handleOk(){
      fetchDelGood({id:this.state.delId}).then(()=>{
        this.props.init(this.state.filter)
        this.setState({show: false})
      })
    }

    // timeChange 获取时间
    timeChange(data){
        // 让请格式转换
        // 日期字符
        let startTime = data[0].format('YYYY-M-DD HH:mm:ss')
        // 时间戳 10929382392939
        let endTime = data[1].valueOf()
        console.log(startTime, endTime)
    }

    render(){
      let { show,goodArr,filter } = this.state
      let { list,total } = this.props.list
      goodArr = list

        const columns = [
            {
              title: '商品名称',
              dataIndex: 'name',
              key: 'name',
              align:'center',
              render: (text,row,index)=>(
                <div className='row-first'>
                  <img className='row-img' src={img.bastImg+row.img} alt={row.name}/>
                  <div>{row.name}</div>
                </div>
              )
            },
            {
              title: '商品价格',
              dataIndex: 'price',
              key: 'price',
              align:'center',
              render: (text)=>(
                <div>
                    {'￥'+text+'元'}
                </div>
              )
            },
            {
              title: '是否热销',
              dataIndex: 'hot',
              key: 'hot',
              align:'center',
              render: (text)=>(
                <div>
                    {text ? '是' : '否'}
                </div>
              )
            },
            {
              title: '上架时间',
              dataIndex: 'create_time',
              key: 'create_time',
              align:'center',
              render: (text)=>(
                <div>
                    {toDate(text)}
                </div>
              )
            },
            {
              title: '操作栏',
              dataIndex: 'operate',
              key: 'operate',
              align:'center',
              render: (text, row, index)=>(
                <div className='operate-btn'>
                    <Button type="primary" size='small'
                      onClick={this.skipToEdit.bind(this,row)}>
                      修改
                    </Button>
                    <Button type="primary" danger size='small'
                      onClick={this.showModel.bind(this,row)}>
                      删除
                    </Button>
                </div>
              )
            },
        ];

        return (
            <div className='app-good-list'>
                <div> 商品列表 </div>
                <Row>
                    <Col span={2}>品类筛选：</Col>
                    <Col span={8}> <MyCateSelect value={filter.cate} onChange={this.ChangeCate.bind(this)} /> </Col>
                    <Col span={2} offset={2}>日期筛选：</Col>
                    <Col span={6} >
                        <RangePicker showTime onChange={this.timeChange.bind(this)} />
                    </Col>
                    <Col span={2} offset={2} >
                      <Button type="primary" onClick={this.addGoods.bind(this)}>新增商品</Button>
                    </Col>
                </Row>
                
                <div className='app-good-table'>
                    <Table 
                      columns={columns} 
                      dataSource={goodArr}
                      rowKey='_id'
                      pagination={{
                        total,
                        pageSize:3,
                        onChange: this.pageChange.bind(this),
                        current: filter.page,
                        hideOnSinglePage: false
                      }}
                    />
                </div>

                <Modal
                  title="Basic Modal"
                  visible={show}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                >
                  <p>你确定要删除嘛？</p>
                </Modal>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapActionToProps)(GoodList)
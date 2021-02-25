import React from 'react';

import { Button,Rate,Spin } from 'antd';

export default class GoodDetail extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // 在 this.props.match.params 下能获取动态路由传递的数据
        return (
            <div>
                <div>商品详情页面</div>
                {this.props.match.params.name}
                <Button type="primary">Primary Button</Button>
                <div><Rate allowHalf defaultValue={2.5} /></div>
                <div><Spin size="large" /></div>
            </div>
        )
    }
}
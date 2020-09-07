import React from "react";

import '@/assets/css/Layout.scss';

import MySider from './Sider';
import MyHeader from './Header';
import MyContent from './Content';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;



export default class MyLayout extends React.Component{

    render(){
        return (
            <div className='app-mylayout'>
                <Layout>
                    <Sider>
                        <MySider />
                    </Sider>

                    <Layout>
                        <Header> 
                            <MyHeader /> 
                        </Header>

                        <Content> 
                            <MyContent /> 
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
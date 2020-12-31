import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
// import index from './index.module.css'
import './index.css'

import Sider from './components/sider'
import Headers from './components/header'
import Breadcrumb from './components/breadcrumb'
import Footer from './components/footer'


import { Layout } from 'antd';


const { Content } = Layout;

class LayoutComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                    <Sider />

                <Layout className="site-layout">
                    <Headers />

                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb />
                        
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        );
    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(LayoutComponent)












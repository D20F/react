import React from 'react';
import css from './index.module.scss'
import { Layout } from 'antd';

import Sider from './components/sider'
import Header from './components/header'
import Breadcrumb from './components/breadcrumb'
import Footer from './components/footer'

const { Content } = Layout;

class LayoutComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,

        };
    }

    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className={css.layout}>
                <Sider collapsed={this.state.collapsed} />
                <Layout className={css.siteLayout}>
                    <Header collapsed={this.state.collapsed} onCollapse={this.onCollapse} />

                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb />
                        {this.props.children}
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        );
    }
}



export default LayoutComponent












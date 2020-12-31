import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import css from '../index.module.scss'

import { Menu, Layout } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';

const { SubMenu } = Menu;

const { Sider } = Layout;

class SiderComponent extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <Sider collapsed={this.props.collapsed} >
                <div className={css.logo} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(SiderComponent)












import React from 'react';
import { Menu, Layout } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    
} from '@ant-design/icons';
import css from '../index.module.scss'



const { SubMenu } = Menu;
const { Sider } = Layout;

function item(props) {
    console.log(props)
    if (props.children) {
        let i = props.children[0].meta.icon
        return (
            <Menu.Item key="22" icon={i}>
                {props.path}
            </Menu.Item>
        );
    } else {
        console.log(2)
    }
}




class SiderComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <Sider collapsed={this.props.collapsed} >
                <div className={css.logo} />

                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        仪表盘
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="2" icon={<PieChartOutlined />}>Team 1</Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="4" icon={<FileOutlined />}>
                        Files
                </Menu.Item>
                 
                </Menu>
            </Sider>
        );
    }
}




export default SiderComponent












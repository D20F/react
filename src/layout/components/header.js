import React from 'react';

import css from '../index.module.scss'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


import { Layout } from 'antd';


const { Header } = Layout;



class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        return (
            <Header className={css['site-layout-background']} style={{ padding: 0 }}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: css.trigger,
                    onClick: this.props.onCollapse,
                })}
            </Header>

        );
    }
}


export default HeaderComponent












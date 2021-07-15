
import React from 'react';
import css from '../index.module.scss'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
const { Header } = Layout;




function HeaderComponent(props) {
    return (
        <Header className={css['site-layout-background']} style={{ padding: 0 }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: css.trigger,
                onClick: props.onCollapse,
            })}
        </Header>
    );
}

export default HeaderComponent












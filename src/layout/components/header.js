import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import css from '../index.module.css'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


import { Layout } from 'antd';


const { Header } = Layout;



class HeaderComponent extends React.Component {
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
            <Header className={css.siteLayoutBackground} style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: css.trigger,
                    onClick: this.toggle,
                })}
                    </Header>

        );
    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(HeaderComponent)












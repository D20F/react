import React from 'react';
import { connect } from 'react-redux'

import css from '../index.module.scss'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';


import { Layout } from 'antd';


const { Header } = Layout;



class HeaderComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }


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



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(HeaderComponent)












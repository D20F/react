import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'



import { Layout } from 'antd';
const { Footer } = Layout;




class SiderDemo extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>


        );
    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(SiderDemo)












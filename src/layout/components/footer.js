import React from 'react';


import { Layout } from 'antd';
const { Footer } = Layout;




class FooterComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        return (

            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
            </Footer>


        );
    }
}


export default FooterComponent












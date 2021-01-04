import React from 'react';
import { connect } from 'react-redux'



import { Breadcrumb } from 'antd';




class SiderDemo extends React.Component {
    // constructor() {
    //     super()
    // }


    render() {
        return (

            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

        );
    }
}



const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(SiderDemo)












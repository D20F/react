import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import './index.css';


import Layout from '@/layout/index'
import Router from '@/router/index'



ReactDOM.render(
    <Layout>
        <Router />
     </Layout>,
    document.getElementById('root')
);

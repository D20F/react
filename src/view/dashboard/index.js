import React from 'react';


import { trigger } from './index.module.scss'

import { useLocation } from "react-router-dom";



function Dashboard() {
    const { pathname, params } = useLocation();

    // 获得当前路径
    console.log(pathname)
    // 获得当前路由参数
    console.log(params)


    return (
        <div>
            <div className={trigger}>
                <p>
                    Dashboard
                    </p>
            </div>
            <div>
                <p>
                    Dashboard
                    </p>
            </div>
        </div>
    )

}

export default Dashboard













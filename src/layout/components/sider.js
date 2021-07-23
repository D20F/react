import React from 'react';
import { Menu, Layout } from 'antd';
import css from '../index.module.scss'
import routerConfig from '@/router/config'

// import { useHistory, useLocation, useParams, useRouteMatch, } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;




function SiderComponent(props) {
            
        // var history = useHistory();
        // console.log(history)



    // 跳转路由
    function jumpRoute({ key }) {
        // console.log(history)
        // history.push({
        //     pathname: key,
        //     params: {}
        // });
    }

    return (
        <Sider collapsed={props.collapsed} >
            <div className={css.logo} />
            <Menu onClick={jumpRoute} theme="dark" mode="inline" defaultSelectedKeys={['仪表盘']}>
                {
                    routerConfig.map(({ hidden, title, icon, children, path }) => {
                        if (!hidden) {
                            return void 0;
                        }
                        if (children) {
                            return (
                                <SubMenu key={title} icon={icon} title={title}>
                                    {
                                        children.map(({ title, icon, path }) => {
                                            return <Menu.Item key={path} icon={icon}>
                                                {title}
                                            </Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={path} icon={icon}>
                                    {title}
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        </Sider >
    );
}

export default SiderComponent












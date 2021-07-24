import React from 'react';
import { Menu, Layout } from 'antd';
import css from '../index.module.scss'
import routerConfig from '@/router/config'

import getHistory from '@/router/history'



const { Sider } = Layout;
const { SubMenu } = Menu;
const history = getHistory();


// 要用一个大router包起来的

function SiderComponent(props) {

    // 跳转路由
    function jumpRoute({ key }) {
        history.push({
            pathname: key,
            params: { id: 1111 }
        });
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












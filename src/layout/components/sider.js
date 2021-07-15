import React from 'react';
import { Menu, Layout } from 'antd';
import css from '../index.module.scss'
import routerConfig from '@/router/config'
const { Sider } = Layout;
const { SubMenu } = Menu;





// 未修改fun ---未完成
class SiderComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    jumpRoute = (data) => {
        // 跳转路由
        console.log(data)
        console.log(this)
        const state = { 'page_id': 1, 'user_id': 5 }
        const title = 'sss'
        const url = data.key
        let history = window.history
        history.pushState(state, title, url)
        history.go(0);

    }

    render() {
        return (
            <Sider collapsed={this.props.collapsed} >
                <div className={css.logo} />
                <Menu onClick={this.jumpRoute} theme="dark" mode="inline" defaultSelectedKeys={['仪表盘']}>
                    {
                        routerConfig.map(({ hidden, title, icon, children, path }) => {
                            if (hidden) {
                                if (children) {
                                    return <SubMenu key={title} icon={icon} title={title}>
                                        {
                                            children.map(({ title, icon, path }) => {
                                                return <Menu.Item key={path} icon={icon}>
                                                    {title}
                                                </Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                                } else {
                                    return <Menu.Item key={path} icon={icon}>
                                        {title}
                                    </Menu.Item>
                                }
                            }
                        })
                    }
                </Menu>
            </Sider>
        );
    }
}

// 未修改fun ---未完成

function HeaderComponent(props) {
    return (
        <Sider collapsed={this.props.collapsed} >
        <div className={css.logo} />
        <Menu onClick={this.jumpRoute} theme="dark" mode="inline" defaultSelectedKeys={['仪表盘']}>
            {
                routerConfig.map(({ hidden, title, icon, children, path }) => {
                    if (hidden) {
                        if (children) {
                            return <SubMenu key={title} icon={icon} title={title}>
                                {
                                    children.map(({ title, icon, path }) => {
                                        return <Menu.Item key={path} icon={icon}>
                                            {title}
                                        </Menu.Item>
                                    })
                                }
                            </SubMenu>
                        } else {
                            return <Menu.Item key={path} icon={icon}>
                                {title}
                            </Menu.Item>
                        }
                    }
                })
            }
        </Menu>
    </Sider>
    );
}

export default SiderComponent












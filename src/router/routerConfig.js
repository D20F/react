import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';
import React from 'react';

/**
 * children.length                子菜单： 长度超过 1 才会出现子路线 
 * hidden: true                   侧边栏隐藏： 默认为假 , 为真在侧边栏不显示
 * redirect: noRedirect           重定向： noRedirect 不重定向
 * name:'router-name'             路由名称：
 * meta : {

  }
 */
//基础路由
export const basis = [
    {
        path: '/login',
        component: () => import('@/view/login/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () => import('@/view/error/404/index'),
        hidden: true
    },
]

// 表单页
export const form = [
    {
        path: '/form',
        redirect: '/form',
        meta: { title: '表单', icon: (() => { return (<PieChartOutlined />) })() },
        children: [{
            path: '/form',
            name: 'form',
            component: () => import('@/view/form/user/index'),
            meta: { title: '用户页' }
        }]
    }
]
// 仪表盘
export const dashboard = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: { title: '仪表盘', icon: (() => { return (<PieChartOutlined />) })() },
        children: [{
            path: '/dashboard',
            name: 'Dashboard',
            component: () => import('@/view/dashboard/dashboard/index'),
            meta: { title: '监控页' }
        }]
    }
]

// 报错模块 放在异步路由里,解决刷新404问题
export const err = [
    { path: '*', redirect: '/404', hidden: true }
]



// root 账户
export const root = [...err, ...basis, ...form]

// 运营商
export const operator = [...err]


// 全部暴露
export const ALL = {
    basis: basis,
    root: root,
    operator: operator,
}
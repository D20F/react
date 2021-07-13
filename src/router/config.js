
import Login from '@/view/login/index'
import Dashboard from '@/view/dashboard/index'
import Bug from '@/view/bug/index'
import File from '@/view/file/index'

import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    BugOutlined,

} from '@ant-design/icons';
let routerConfig = [
    {
        path: '/login',
        title: '登录',
        component: Login,
        hidden: false
    },
    {
        path: '/',
        title: '仪表盘',
        icon: <PieChartOutlined />,
        component: Dashboard,
        hidden: true
    },
    {
        path: '/chart',
        title: '图表',
        icon: <TeamOutlined />,
        hidden: true,
        children: [
            {
                path: '/chart/file',
                title: '文件',
                icon: <FileOutlined />,
                component: File,
                hidden: true
            },
            {
                path: '/chart/bug',
                title: 'bug',
                icon: <BugOutlined />,
                component: Bug,
                hidden: true
            },
        ]
    },
]

export default routerConfig;
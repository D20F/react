
import Login from '@/view/login/index'
import Dashboard from '@/view/dashboard/index'

let routerConfig = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },

    {
        path: '/',
        component: Dashboard,
        hidden: true
    }
]

export default routerConfig;

import Login from '../view/login/index'
import Dashboard from '../view/dashboard/index'

let routerConfig = [
    {
        path: '/login',
        // component: () => import('@/view/login/index'),
        component: Login,
        hidden: true
    },

    {
        path: '/',
        // component: () => import('@/view/dashboard/index'),
        component: Dashboard,
        hidden: true
    }
]
export default routerConfig;
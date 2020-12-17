import Layout from '@/layout'

export default [
    {
        path: '/',
        redirect: '/index',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import(/* webpackChunkName: 'root' */ '@/view/index'),
                meta: {
                    title: '首页'
                }
            }
        ]
    }
]

import emptyLayout from '@/layout/empty'

export default [
    {
        path: '/',
        redirect: '/index',
        component: emptyLayout,
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

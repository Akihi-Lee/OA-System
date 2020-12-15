import emptyLayout from '@/layout/empty'

export default [
    {
        path: '/test',
        redirect: '/test',
        component: emptyLayout,
        children: [
            {
                path: 'index',
                name: 'test',
                component: () => import(/* webpackChunkName: 'test' */ '@/view/index'),
                meta: {
                    title: 'ceshi'
                }
            }
        ]
    }
]

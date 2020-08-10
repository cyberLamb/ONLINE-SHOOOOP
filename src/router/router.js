import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalog from '../components/v-catalog'
import vLike from '../components/v-like'


Vue.use(VueRouter)

const router = new VueRouter({
        routes :[
            {
                path: '/',
                name: 'catalog',
                component: vCatalog,
            },
            {
                path: '/like',
                name: 'vLike',
                component: vLike,
                props: true
            }
        ],
    mode: 'history'
})

export default router;
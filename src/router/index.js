import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path: '/dashboard',
        component: () => import('@/views/Dashboard.vue')
    },
    {
        path: '/apps',
        component: () => import('@/views/Apps.vue')
    },
    {
        path: '/router',
        component: () => import('@/views/Router.vue')
    },
    {
        path: '/swarm',
        component: () => import('@/views/Swarm.vue')
    },
    {
        path: '/settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/oauth-providers',
        component: () => import('@/views/OAuthProviders.vue')
    },
    {
        path: '/users',
        component: () => import('@/views/Users.vue')
    },
    {
        path: '/one-click',
        component: () => import('@/views/OneClick.vue')
    },
    {
        path: '/videos',
        component: () => import('@/views/Videos.vue')
    },
    {
        path: '/videos/:id',
        component: () => import('@/views/Video.vue')
    },
    {
        path: '/blog',
        component: () => import('@/views/Blog.vue')
    },
    {
        path: '/blog/:id',
        component: () => import('@/views/BlogPost.vue'),
        props: true
    },
    {
        path: '/products',
        component: () => import('@/views/Products.vue')
    },
    {
        path: '/products/:id',
        component: () => import('@/views/ProductDetail.vue'),
        props: true
    },
    {
        path: '/contact',
        component: () => import('@/views/Contact.vue')
    },
    {
        path: '/documentation',
        component: () => import('@/views/Documentation.vue')
    },
    {
        path: '/profile',
        component: () => import('@/views/Profile.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/recover',
        component: () => import('@/views/Recover.vue')
    },
    {
        path: '/setup',
        component: () => import('@/views/Setup.vue')
    },
    {
        path: '/search/:term?',
        component: () => import('@/views/SearchResult.vue'),
        props: true
    },
    {
        path: '/todos',
        component: () => import('@/views/Todos.vue')
    },
    {
        path: '/terms',
        component: () => import('@/views/Terms.vue')
    },
    {
        path: '/policy',
        component: () => import('@/views/Privacy.vue')
    },
    {
        path: '/disconnected',
        component: () => import('@/views/Disconnected.vue')
    },
    {
        path: '/setup',
        children: [
            {
                path: 'docker',
                component: () => import('@/views/SetupDocker.vue')
            },
            {
                path: 'swarm',
                component: () => import('@/views/SetupSwarm.vue')
            },
            {
                path: 'database',
                component: () => import('@/views/SetupDatabase.vue')
            },
            {
                path: 'mail',
                component: () => import('@/views/SetupMail.vue')
            },
            {
                path: 'admin',
                component: () => import('@/views/SetupAdmin.vue')
            },
            {
                path: 'letsencrypt',
                component: () => import('@/views/SetupLetsEncrypt.vue')
            }
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFound.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router
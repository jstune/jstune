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
        component: () => import('@/views/DockerServices.vue')
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
        path: '/search/:term?',
        component: () => import('@/views/SearchResult.vue'),
        props: true
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
            },
            {
                path: 'attached',
                component: () => import('@/views/SetupAttached.vue')
            }
        ]
    },
    {
        path: '/docker',
        component: () => import('@/components/TemplateSidemenu.vue'),
        props: { renderer: 'view' },
        children: [
            {
                path: 'nodes',
                component: () => import('@/views/DockerNodes.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'services',
                children: [
                    {
                        path: '',
                        component: () => import('@/views/DockerServices.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'environments',
                        component: () => import('@/views/DockerServicesEnvironments.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'networks',
                        component: () => import('@/views/DockerServicesNetworks.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'ports',
                        component: () => import('@/views/DockerServicesPorts.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'volumes',
                        component: () => import('@/views/DockerServicesVolumes.vue'),
                        props: { renderer: 'slot' }
                    }
                ]
            },
            {
                path: 'tasks',
                component: () => import('@/views/DockerTasks.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'networks',
                component: () => import('@/views/DockerNetworks.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'volumes',
                component: () => import('@/views/DockerVolumes.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'images',
                component: () => import('@/views/DockerImages.vue'),
                props: { renderer: 'slot' }
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
import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Todos',
        route: '/'
    },
    {
        label: 'Apps',
        route: '/apps'
    },
    {
        label: 'Router',
        route: '/router'
    },
    {
        label: 'Cluster',
        route: '/cluster'
    },
    {
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Settings',
        route: '/settings'
    },
    {
        label: 'One Click Apps',
        route: '/one-click'
    },
]
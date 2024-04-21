import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Dashboard',
        route: '/dashboard'
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
        label: 'Swarm',
        route: '/swarm'
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
        label: 'OAuth',
        route: '/oauth-providers'
    },
    {
        label: 'One Click Apps',
        route: '/one-click'
    },
]
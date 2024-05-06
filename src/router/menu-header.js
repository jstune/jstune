import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        label: 'Router',
        route: '/router'
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
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Docker Swarm',
        route: '/docker/nodes'
    }
]
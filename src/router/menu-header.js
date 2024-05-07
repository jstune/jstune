import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        label: 'Routes',
        route: '/routes'
    },
    {
        label: 'Settings',
        route: '/settings'
    },
    {
        label: 'Authentication',
        route: '/auth'
    },
    {
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Docker',
        route: '/docker/apps'
    },
    {
        label: 'Deploy',
        route: '/deploy'
    }
]
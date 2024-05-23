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
        label: 'Auth',
        route: '/auth'
    },
    {
        label: 'Env',
        route: '/env'
    },
    {
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Deploy Static',
        route: '/deploy-static'
    },
    {
        label: 'Deploy',
        route: '/deploy'
    },
    {
        label: 'Docker',
        route: '/docker/apps'
    }
]
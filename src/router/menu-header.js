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
        label: 'Env',
        route: '/env'
    },
    {
        label: 'Auth',
        route: '/auth'
    },
    {
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Tools',
        children: [
            {
                label: 'Terminal',
                route: '/terminal'
            },
            {
                label: 'Monitor',
                route: '/monitor'
            },
            {
                label: 'Docker',
                route: '/docker/apps'
            },
        ]
    },
    {
        label: 'Deploy',
        children: [
            {
                label: 'Static App',
                route: '/deploy-static'
            },
            {
                label: 'Docker App',
                route: '/deploy'
            },
        ]
    }
]
import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Apps',
        route: '/'
    },
    {
        label: 'One Click',
        route: '/one-click'
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
    }
]
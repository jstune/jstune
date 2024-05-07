import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [
    {
        label: 'Swarm'
    },
    {
        label: 'Machines',
        route: '/docker/nodes'
    },
    {
        label: 'Apps',
        route: '/docker/services',
        children: [
            {
                label: 'Environments',
                route: '/docker/services/environments'
            },
            {
                label: 'Networks',
                route: '/docker/services/networks'
            },
            {
                label: 'Ports',
                route: '/docker/services/ports'
            },
            {
                label: 'Volumes',
                route: '/docker/services/volumes'
            },
        ]
    },
    {
        label: 'Tasks',
        route: '/docker/tasks'
    },
    {
        label: 'Networks',
        route: '/docker/networks'
    },
    {
        label: 'Volumes',
        route: '/docker/volumes'
    },
    {
        label: 'Images',
        route: '/docker/images'
    }
]
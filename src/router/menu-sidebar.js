import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [
    {
        label: 'General',
        children: [
            {
                label: 'Users',
                route: '/db1'
            },
            {
                label: 'Settings',
                route: '/db1'
            }
        ]
    },
    {
        label: 'Authentication',
        children: [
            {
                label: 'OAuth',
                route: '/db1'
            }
        ]
    },
    {
        label: `Reverse Proxy`,
        children: [
            {
                label: 'Routes',
                route: '/db1'
            }
        ]
    },
    {
        label: 'Docker Swarm',
        children: [
            {
                label: 'Nodes',
                route: '/db4'
            },
            {
                label: 'Services',
                route: '/db4'
            },
            {
                label: 'Tasks',
                route: '/db4'
            },
            {
                label: 'Networks',
                route: '/db4'
            },
            {
                label: 'Volumes',
                route: '/db4'
            },
            {
                label: 'Images',
                route: '/db4'
            }
        ]
    }
    
]
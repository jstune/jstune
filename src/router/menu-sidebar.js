import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Applications'
    },
    {
        label: 'NodeJS',
        route: '/',
    },
    {
        label: 'PHP',
        route: '/php',
    },
    {
        label: 'Databases',
    },
    {
        label: `MySQL`,
        children: [{
            label: 'DB 1',
            route: '/db1'
        }, {
            label: 'DB 2',
            route: '/db2'
        }]
    },
    {
        label: `MongoDB`,
        children: [{
            label: 'DB 3',
            route: '/db3'
        }, {
            label: 'DB 4',
            route: '/db4'
        }]
    },
]
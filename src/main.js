import '@/assets/stylesheets/theme.css'
import {
    createApp,
    ref,
    computed
} from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import menus from '@/router/menus.js'
import feathers from '@feathersjs/client'
import sio from 'socket.io-client'

let domain = ['jstune.com', 'studio.vueplay.com', 'next.vueplay.com', 'localhost', 'admin.localhost'].includes(parent?.location?.hostname) ? 'http://localhost:5050' : '/'
const socket = sio(domain, {
    transports: ['websocket', 'polling']
})

const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

io.io.on('disconnect', () => {
    console.log('Disconnected from server') // @todo - Show a dialog notice
    if (router.currentRoute.value.fullPath === '/login') {
        console.log('going to disconnected route')
        router.push('/disconnected')
    }
});

io.io.on('connect', (test) => {
    console.log('Connected to server')
    if (router.currentRoute.value.fullPath === '/disconnected') {
        console.log('going to root route')
        router.push('/')
    }
});

let user = ref()

io.reAuthenticate().then(user => {
    user.value = user
}).catch(e => {})

router.beforeEach(async to => {
    if (to.path === '/logout') {
        console.log('logging out')
        await io.logout()
        return '/login'
    }
    try {
        const timeout = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Re-authentication timed out')), 3000)
        })
        const authenticate = new Promise(async (resolve, reject) => {
            try {
                user.value = (await io.reAuthenticate())?.user
                if (user.value) {
                    resolve()
                } else {
                    reject()
                }
            } catch(e) {
                reject(e)
            }
        })
        await Promise.race([authenticate, timeout])
        /*
        if (
            ['/', '/setup', '/login', '/register', '/recover', '/reset-password', '/disconnected'].includes(to.path) ||
            to.path.startsWith('/setup/')
        ) return '/dashboard'
        */
        console.log('to', to.path)
    } catch (e) {

        console.log('Something bad happened', e.message)

        let uninstalled = []
        const timeout = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Fetching facilities timed out')), 1000)
        })
        const getUninstalledFacilities = new Promise(async (resolve, reject) => {
            try {
                uninstalled = await io.service('setup').get()
                resolve()
            } catch(e) {
                reject(e)
            }
        })

        user.value = null

        try {
            await Promise.race([getUninstalledFacilities, timeout])
            if (uninstalled.length && to.path !== '/setup/' + uninstalled[0].name) {
                // Force going to next setup step if installation is not completed
                return '/setup/' + uninstalled[0].name
            }
            console.log('Something is wrong... Going to login route')
            if (!uninstalled.length && !['/login', '/register', '/recover', '/reset-password'].includes(to.path)) return '/login'
        } catch(e) {
            console.log('disconnected ..')
            if (!['/disconnected'].includes(to.path)) return '/disconnected'
        }
    }
})

const app = createApp(App)

app.provide('menus', menus)
app.provide('server', domain)
app.provide('user', computed(() => user?.value))
app.provide('userUpdate', val => user.value = val)
app.provide('io', io)
app.use(router)
app.mount('#app')
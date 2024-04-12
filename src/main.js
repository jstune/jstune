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

let domain = ['studio.vueplay.com', 'next.vueplay.com', 'localhost'].includes(parent?.location?.hostname) ? 'http://localhost:5050' : '/'
const socket = sio(domain, {
    transports: ['websocket', 'polling']
})

const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

let user = ref()

router.beforeEach(async to => {
    try {
        const timeout = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Re-authentication timed out')), 1000)
        })
        const authenticate = new Promise(async (resolve, reject) => {
            try {
                user.value = (await io.reAuthenticate())?.user
                resolve()
            } catch(e) {
                reject(e)
            }
        })
        await Promise.race([authenticate, timeout])
        user.value = usr?.user
        if (to.path === '/') return '/dashboard'
    } catch (e) {
        let uninstalled = []
        user.value = null

        const timeout = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Fetching facilities timed out')), 1000)
        })
        
        const getUninstalledFacilities = new Promise(async (resolve, reject) => {
            try {
                await io.service('setup').get()
                resolve()
            } catch(e) {
                reject(e)
            }
        })

        try {
            await Promise.race([getUninstalledFacilities, timeout])
            
            if (uninstalled.length && to.path !== '/setup/' + uninstalled[0].name) {
                // Force going to next setup step if installation is not completed
                return '/setup/' + uninstalled[0].name
            }
            
            // Force going to login page if not routing to one of the following routes
            if (!uninstalled.length && !['/login', '/register', '/recover'].includes(to.path)) return '/login'
        } catch(e) {
            console.log('Server Error', e)
            if (!['/disconnected'].includes(to.path)) return '/disconnected'
        }
    }
})

const app = createApp(App)

app.provide('menus', menus)
app.provide('user', computed(() => user?.value))
app.provide('userUpdate', val => user.value = val)
app.provide('io', io)
app.use(router)
app.mount('#app')
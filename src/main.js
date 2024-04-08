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

// io.reAuthenticate().then(() => {}).catch(e => {})

router.beforeEach(async to => {
    try {
        // If user is logged in
        user.value = (await io.reAuthenticate())?.user
        if (to.path === '/') return '/dashboard'
    } catch (e) {
        // If user is not logged in
        user.value = null
        // Retrieve potential missing configuration setups
        let uninstalled = await io.service('setup').get()
        // if (uninstalled.length) console.log('Remaining configurations to install', uninstalled)
        if (uninstalled.length && to.path !== '/setup/' + uninstalled[0].name) {
            // Force going to next setup step if installation is not completed
            return '/setup/' + uninstalled[0].name
        }
        
        // Force going to login page if not routing to one of the following routes
        if (!uninstalled.length && !['/login', '/register', '/recover'].includes(to.path)) return '/login'
    }
})

const app = createApp(App)

app.provide('menus', menus)
app.provide('user', computed(() => user?.value))
app.provide('userUpdate', val => user.value = val)
app.provide('io', io)
app.use(router)
app.mount('#app')
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

let domain = ['studio.vueplay.com', 'next.vueplay.com', 'localhost'].includes(parent?.location?.hostname) ? 'http://localhost:4040' : '/'
const socket = sio(domain, {
    transports: ['websocket', 'polling']
})

const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

let user = ref()

io.reAuthenticate().then(() => {}).catch(e => {})

router.beforeEach(async to => {
    try {
        // If user is logged in
        user.value = (await io.reAuthenticate())?.user
        if (to.path === '/') return '/dashboard'
    } catch (e) {
        // If user is not logged in
        user.value = null
        // Retrieve potential missing configuration setups
        let setup = await io.service('status').get('setup')
        if (setup.length && to.path !== '/setup/' + setup[0]) {
            // Force going to next setup step if installation is not completed
            return '/setup/' + setup[0]
        }
        
        // Force going to login page if not routing to one of the following routes
        if (!setup.length && !['/login', '/register', '/recover'].includes(to.path)) return '/login'
    }
})

const app = createApp(App)

app.provide('menus', menus)
app.use(router)
app.mount('#app')
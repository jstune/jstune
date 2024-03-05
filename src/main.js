import '@/assets/stylesheets/theme.css'
import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import menus from '@/router/menus.js'

const app = createApp(App)

app.provide('menus', menus)
app.use(router)
app.mount('#app')
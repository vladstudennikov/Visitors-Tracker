import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import router from './routes'
import App from './App'

const app = createApp(App)
app.use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

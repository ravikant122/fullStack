import './styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:3000'
axios.defaults.headers['Content-Type'] = 'application/json'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

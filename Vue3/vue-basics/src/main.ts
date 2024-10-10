import './styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// always use https://<url>, otherwise it will search for http://localhost:5173/<api>
// api is the api that you've mentioned in the baseURL and you will get html page response
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1/'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


axios.defaults.baseURL = 'http://localhost:8000/api/' 


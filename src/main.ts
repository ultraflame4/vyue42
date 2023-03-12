import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/index.css'
import plugin from "@/index";

const app = createApp(App)

app.use(router)
app.use(plugin)


app.mount('#app')


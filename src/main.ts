import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/index.css'
import {vyue42} from "@/index";

const app = createApp(App)

app.use(router)
app.use(vyue42)


app.mount('#app')


import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import route from "./router";
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(route)
app.mount('#app')
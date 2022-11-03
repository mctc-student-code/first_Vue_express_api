import { createApp } from 'vue'
import App from './App.vue'

import HelloApi from '@/services/HelloAPI'

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloApi

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

const app = createApp(App).use(store).use(router).use(VueLoading)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')

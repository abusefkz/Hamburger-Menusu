import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "@/assets/style.css"
import "@/assets/bootstrap.min.css"
import navbarTag from "@/components/navbarTag.vue"
import store from './vuex'
import router from './routerr'


loadFonts()

const app =createApp(App)
app.component('navbarTag', navbarTag)
app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app')

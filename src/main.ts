import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
// import mitt from "mitt";

loadFonts()

const pinia = createPinia()
const app = createApp(App)

// app.config.globalProperties.emitter = mitt();

app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')

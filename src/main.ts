import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import 'primeicons/primeicons.css'
import Password from 'primevue/password'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.component('AppButton', Button)
app.component('AppPassword', Password)

app.mount('#app')

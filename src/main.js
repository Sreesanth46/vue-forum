import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppDate from '@/components/AppDate.vue'
import store from '@/stores'

import './assets/style.css'

const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(store)

// TODO: find a way to handle global components

// const requireComponent = require.context("./components", true, /App[A-Z]\w+\.(vue)$/)
// requireComponent.key().forEach((filename) => {
//     let baseComponentConfig = requireComponent(filename)
//     baseComponentConfig = baseComponentConfig.default || baseComponentConfig
//     const baseComponentName = baseComponentConfig.name || (
//         filename.replace(/^.+\//, '').replace(/\.\w+$/, '')
//     )
//     app.component(baseComponentName, baseComponentConfig)
// });

app.component('AppDate', AppDate)

app.mount('#app')

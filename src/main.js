import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import SvgIcon from './icons'

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
SvgIcon(app)
app.use(store)
app.use(router)
app.mount('#app')

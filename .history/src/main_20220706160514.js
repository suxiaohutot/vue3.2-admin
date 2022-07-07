import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// 全局引入ui库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(store, key);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
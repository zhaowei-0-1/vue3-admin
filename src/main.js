import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
// 粒子库
// import Particles from "particles.vue3";

createApp(App)
    .use(ElementPlus)
    .use(store).use(router).mount('#app')

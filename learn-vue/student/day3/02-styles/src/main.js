// vite.config.js에 @ alias가 등록돼있음
// import './css/global.css' 상대경로보다 @ 사용하는걸 권장
import '@/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

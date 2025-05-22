// import '@/css/global.css'
import { createApp } from 'vue'
import App from './App.vue'
import SecondChild from './components/SecondChild.vue'
import FirstChild from './components/FirstChild.vue'

// 컴포넌트 전역 등록
// 강사님은 비추천하심 : 컴포넌트의 상하관계가 뚜렷하게 보이지 않음
const app = createApp(App)
app.component('FirstChild', FirstChild)
app.component('SecondChild', SecondChild)
// 메서드 체이닝
// app.component('SecondChild', SecondChild)
app.mount('#app')

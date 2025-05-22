import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// const app = createApp(App) // 뷰 인스턴스 객체
// app.mount('#app') // id가 app인 요소(index.html에 있음)에 뷰 인스턴스를 마운트 하겠다?

// 하나의 단일 루트 컴포넌트를 가짐
// .vue 파일 -> 컴포넌트 (리액트에서는 .tsx)

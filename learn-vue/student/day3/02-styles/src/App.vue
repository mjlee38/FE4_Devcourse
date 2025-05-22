<script>
import FirstChild from '@/components/FirstChild.vue'

export default {
  name: 'App',
  components: {
    FirstChild,
  },
  data() {
    return {
      color: 'blue',
      // 동적 클래스 바인딩
      isShow: false,
    }
  },
}
</script>
<template>
  <!-- v-bind로 인라인 스타일 적용 (장점: 데이터와 연동 가능) -->
  <h1 :style="{ color: 'red', textDecoration: 'underline' }">App Vue</h1>
  <h1 :style="{ color, textDecoration: 'underline' }">App Vue</h1>

  <!-- isShow가 true면 isLoggedin 클래스 생성 -->
  <h1 :class="{ isLoggedin: isShow }" :style="{ color, textDecoration: 'underline' }">App Vue</h1>
  <h2 class="text-blue-500">Hello, World!</h2>
  <!-- 
      FirstChild를 div로 wrapping 하지 않으면 치환되는 루트까지 자신의 scope라고 판단, 스타일 적용됨
      scope 설정을 해도 import한 컴포넌트의 루트 요소까지는 영향을 줌 !
      단일 루트 요소일때만 ! 루트요소가 두개면 또 적용 안됨
  -->
  <FirstChild />
  <h2>Hello, World!</h2>
</template>
<style scoped>
/* 
  태그 선택자
  아이디 선택자
  클래스 선택자
  전체 선택자
  속성 선택자
  자식 선택자
  그룹 선택자
  형제 선택자
  하위 선택자 
  ...

  가장 기피해야할 선택자 : 태그 선택자 !
*/
h1 {
  color: red;
}
.isLoggedin {
  font-size: 50px;
}
</style>

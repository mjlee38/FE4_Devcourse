<!-- #2

  <script>
  export default {
    name: 'App',
    data() {
      return {
        weather: 'sunny', // rainy, cloudy
      }
    },
  }
  </script>
  <template>
    <h1 v-if="weather === 'sunny'">날씨가 맑습니다! 선크림 필수!</h1>
    <h1 v-else-if="weather === 'rainy'">비가 옵니다! 우산 필수!</h1>
    <h1 v-else-if="weather === 'cloudy'">날씨가 흐립니다! 외투 필수!</h1>
  </template>
-->

<!-- # 3
  <script>
  export default {
    name: 'App',
    data() {
      return {
        content: '<strong>HTML을 출력합니다!</strong>',
      }
    },
  }
  </script>
  <template>
    <h1 v-html="content"></h1>
  </template>
  <style scoped></style> 
-->

<!-- #4
  <script>
  export default {
    name: 'App',
    data() {
      return {
        message: '<strong>HTML을 출력합니다!</strong>',
      }
    },
  }
  </script>
  <template>
    <p v-text="message"></p>
  </template>
  <style scoped></style>
-->

<!-- #5
  <script>
  export default {
    name: 'App',
    data() {
      return {
        isVisible: true,
      }
    },
  }
  </script>
  <template>
    <p v-show="isVisible">조건이 참입니다!</p>
  </template>
  <style scoped></style>
-->

<script>
// Options API (2.x) / Conposition API (3.x)
// 클래스 컴포넌트       / 함수형 컴포넌트 (훨씬 간결함)  -> 그 외에 성능 등의 차이 전혀 없음
// 약속된 객체의 속성
// -- data: 뷰에서 사용할 데이터(상태)를 정의할 때 사용하는 속성

export default {
  // data: function () {
  //   return {
  //     message: 'Hello, World!'
  //   }
  // }
  // 객체의 "단축 속성명"으로 인해 줄여서 쓸 수 있다
  data() {
    return {
      message: 'Hello, World!',
      greet: 'Good, After noon!',
    }
  },
}
</script>
<template>
  <!-- 
      텍스트 보관 (mustache syntax) 방법으로 출력 가능
      - 중괄호가 겹쳐진 형태 (내부의 공백은 상관없음)
  -->
  <h1>{{ message }}</h1>
  <h1>{{ greet }}</h1>
</template>
<style></style>

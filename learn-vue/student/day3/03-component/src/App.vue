<script>
// 지역 등록
import FirstChild from './components/FirstChild.vue'
import SecondChild from './components/SecondChild.vue'

export default {
  name: 'App',
  components: {
    FirstChild,
    SecondChild,
  },
  data() {
    return {}
  },
  methods: {
    greet() {
      console.log('greet')
    },
    // 매개변수가 객체 형태일 때
    printHello(propsObj) {
      console.log('Hello', propsObj.name, propsObj.age)
    },

    // 매개변수가 일반 자료형일 때
    // printHello(name, age) {
    //   console.log('Hello', name, age)
    // },
  },
}
</script>
<template>
  <!-- 컴포넌트에 데이터 전달 (props 옵션 사용) -->
  <FirstChild name="dd" :age="27" email="dd@naver.com" />

  <!-- 전달할 때는 케밥, 받을 때는 카멜 케이스 사용 -->
  <!-- 이벤트 (메서드) 전달은 @ 로 -->
  <SecondChild my-custom-value="dd" @greet="greet" @print-hello="printHello" />
  <!-- 구조분해 할당해서 전달하려면 @print-hello="({name,age})=>printHello(name,age)" -->
</template>
<style scoped></style>

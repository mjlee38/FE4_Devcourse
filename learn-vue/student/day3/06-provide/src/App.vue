<script>
// import CountDisplay from './components/CountDisplay.vue'
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    // CountDisplay,
    CountGroup,
  },
  data() {
    return {
      count: 0,
    }
  },
  // 전역으로 관리할 상태 정의
  // 별도의 props 전달 없이 하위 컴포넌트에서 사용 가능 (부모에는 전달 불가능)
  // 따지고보면 전역은 아님, 상위에는 전달 불가능하니까. (전역 상태 관리 같은...)
  // 정의가된 컴포넌트로부터 하위 컴포넌트에서만 사용 가능

  // 한계, 단점
  // 코드의 맥락을 파악하기 어려움 (내가 받아온 inject가 어디서 온건지 찾기가 직관적이지 않음)
  // 데이터의 반응성이 깨짐

  // 반응성 유지하려면
  // this.count를 콜백함수 형태로 함수로 감싸기
  // inject: ['count'] -> 이게 이제 함수가 됨
  provide() {
    return {
      // name: 'dd',

      // 공급할 데이터 정의
      count: () => this.count,
      increment: this.increment,
      reset: this.reset,
      decrement: this.decrement,
      incrementByAmount: this.incrementByAmount,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    reset() {
      this.count = 0
    },
    increment() {
      console.log('increment')
      this.count += 1
    },
    // 매개변수만큼 count 증가
    incrementByAmount(amount) {
      this.count += amount
    },
  },
}
</script>
<template>
  <!-- <CountDisplay /> -->
  <CountGroup />

  <!-- 정리 -->
  <!-- props: ['name'] -->
  <!-- 
      props: {
        name: {
          type: String, Number, Function, Array, Boolean, Symbol
          default(){}
          required: true/false
          validator(){ retrun true/false } // props에 대한 유효성 검사
        }
      }
  -->
  <!-- 
      클릭하면 printHello 발신
      <button @click="$emit('printHello')" >click</button>
      발신하면 여기서 ↓ 수신해서 함수 실행
  -->
  <CountEx name="sucoding" @print-hello="() => console.log('hello')" />
</template>
<style scoped></style>

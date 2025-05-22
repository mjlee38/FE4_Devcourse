<script>
import CountGroup from './components/CountGroup.vue'

export default {
  name: 'App',
  components: {
    CountGroup,
  },
  data() {
    return {
      count: 0,
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
  <!-- 커스텀 이벤트로 전달 -->
  <!-- <CountGroup :count @increment="increment" @decrement="decrement" @reset="reset" /> -->

  <!-- props로 전달 (모두 v-bind로 전달) -->
  <!-- 
      incrementByAmount : 매개변수 있어도 전달 방법은 똑같음

      ⬇️ 근데 이렇게 받으면 안됨 ❌ 이렇게 그냥 전달만 한다고 자식 컴포넌트의 매개변수가 부모로 전달되는게 x
      :incrementByAmount="incrementByAmount"

      ⬇️ 이렇게 콜백함수 형태로 받아야 됨 (중간의 CountGroup에서도 마찬가지)
      :incrementByAmount="(amount) => incrementByAmount(amount)"

  -->
  <CountGroup
    :count
    :increment="increment"
    :decrement="decrement"
    :reset="reset"
    :incrementByAmount="(amount) => incrementByAmount(amount)"
  />
</template>
<style scoped></style>

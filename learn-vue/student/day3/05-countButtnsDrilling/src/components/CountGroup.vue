<script>
// import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'
import CountButtonsWithProps from './CountButtonsWithProps.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    // CountButtons,
    CountButtonsWithProps,
  },
  /*
    [ 사용자 정의 이벤트로 전달 ]
    // props로 전달한 건 props로 받고
    props: {
      count: {
        type: Number,
      },
    },
    // 사용자 정의 이벤트로 전달한 건 emits로 받기
    emits: ['increment', 'decrement', 'reset'],
  */
  // 전부 props로 전달
  props: {
    count: {
      type: Number,
    },
    increment: {
      type: Function,
    },
    decrement: {
      type: Function,
    },
    reset: {
      type: Function,
    },
    incrementByAmount: {
      type: Function,
    },
  },
}
</script>
<template>
  <CountDisplay :count="count" />
  <!-- 
  <CountButtons
    @increment="$emit('increment')"
    @decrement="$emit('decrement')"
    @reset="$emit('reset')"
  />
  -->
  <CountButtonsWithProps
    :increment="increment"
    :decrement="decrement"
    :reset="reset"
    :incrementByAmount="(amount) => incrementByAmount(amount)"
  />
</template>
<style scoped></style>

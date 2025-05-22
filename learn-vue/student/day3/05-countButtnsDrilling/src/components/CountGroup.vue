<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
  // props로 전달한 건 props로 받고
  props: {
    count: {
      type: Number,
    },
  },
  // 사용자 정의 이벤트로 전달한 건 emits로 받기
  emits: ['increment', 'decrement', 'reset'],
}
</script>
<template>
  <CountDisplay :count="count" />
  <CountButtons
    @increment="$emit('increment')"
    @decrement="$emit('decrement')"
    @reset="$emit('reset')"
  />
</template>
<style scoped></style>

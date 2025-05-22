<script>
import CountButtons from './CountButtons.vue'
import CountDisplay from './CountDisplay.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
  // props로 전달 받은건 props로
  props: {
    count: {
      type: Number,
    },
  },
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

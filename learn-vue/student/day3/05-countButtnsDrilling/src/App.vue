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
  },
}
</script>
<template>
  <!-- 커스텀 이벤트로 전달 -->
  <!-- <CountGroup :count @increment="increment" @decrement="decrement" @reset="reset" /> -->

  <!-- props로 전달 (모두 v-bind로 전달) -->
  <CountGroup :count :increment="increment" :decrement="decrement" :reset="reset" />
</template>
<style scoped></style>

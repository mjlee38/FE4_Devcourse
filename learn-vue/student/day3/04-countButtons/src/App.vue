<script>
// import CountButtons from './components/CountButtons.vue'
import CountButtonsWithProp from './components/CountButtonsWithProp.vue'
import CountDisplay from './components/CountDisplay.vue'

export default {
  name: 'App',
  components: {
    CountDisplay,
    // CountButtons,
    CountButtonsWithProp,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrementHandler() {
      this.count -= 1
      // console.log(this.count)
      // console.log('decrement')
    },
    resetHandler() {
      this.count = 0
      // console.log('reset')
    },
    incrementHandler() {
      this.count += 1
      // console.log('increment')
    },
  },
}
</script>
<template>
  <CountDisplay :count />
  <!-- 커스텀 이벤트 등록 (v-on, vue에서 공식적으로 권장) -->
  <!-- <CountButtons
    @decrement-handler="decrementHandler"
    @reset-handler="resetHandler"
    @increment-handler="incrementHandler"
  /> -->

  <!-- props 전달 방식 (v-bind) -->
  <CountButtonsWithProp
    :decrement-handler="decrementHandler"
    :reset-handler="resetHandler"
    :increment-handler="incrementHandler"
  />
</template>
<style scoped></style>

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
      // console.log(this.count)
      // console.log('decrement')
    },
    reset() {
      this.count = 0
      // console.log('reset')
    },
    increment() {
      this.count += 1
      // console.log('increment')
    },
  },
}
</script>
<template>
  <CountGroup :count="count" @increment="increment" @decrement="decrement" @reset="reset" />
</template>
<style scoped></style>

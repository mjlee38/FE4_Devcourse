<script>
export default {
  name: 'CountButtonsWithProps',
  props: {
    decrement: {
      type: Function,
    },
    increment: {
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
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>

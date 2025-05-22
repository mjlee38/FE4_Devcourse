<script>
export default {
  name: 'CountButtons',
  props: {
    decrementHandler: {
      type: Function,
    },
    incrementHandler: {
      type: Function,
    },
    resetHandler: {
      type: Function,
    },
  },
}
</script>
<template>
  <button @click="decrementHandler">-</button>
  <button @click="resetHandler">0</button>
  <button @click="incrementHandler">+</button>
</template>
<style scoped></style>

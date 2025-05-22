<script>
export default {
  name: 'CountButtons',
  inject: ['increment', 'reset', 'decrement', 'incrementByAmount'],
}
</script>
<template>
  <button @click="decrement">-</button>
  <button @click="reset">0</button>
  <button @click="increment">+</button>
  <button @click="incrementByAmount(10)">++</button>
</template>
<style scoped></style>

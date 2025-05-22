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
  <!-- 나 여기에 매개변수 전달했는데.. 필요없음.. 왜 했지...? ㅋㅋ... -->
  <button @click="decrementHandler">-</button>
  <button @click="resetHandler">0</button>
  <button @click="incrementHandler">+</button>
</template>
<style scoped></style>

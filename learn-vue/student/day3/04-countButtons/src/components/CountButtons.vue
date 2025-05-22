<script>
export default {
  name: 'CountButtons',
  emits: ['incrementHandler', 'resetHandler', 'decrementHandler'],
}
</script>
<template>
  <!-- 나 여기에 매개변수 전달했는데.. 필요없음.. 왜 했지...? ㅋㅋ... -->
  <button @click="$emit('decrementHandler')">-</button>
  <button @click="$emit('resetHandler')">0</button>
  <button @click="$emit('incrementHandler')">+</button>
</template>
<style scoped></style>

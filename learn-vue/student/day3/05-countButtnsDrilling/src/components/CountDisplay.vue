<script>
export default {
  name: 'CountDisplay',
  props: {
    count: {
      type: Number,
    },
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
</template>
<style scoped></style>

<script>
export default {
  name: 'CountDisplay',
  // provide로 공급한 데이터는 inject로 받아와서 사용
  // inject: ['name'],
  inject: ['count'],
  computed: {
    currentCount() {
      return this.count()
    },
  },
}
</script>
<template>
  <h1>Count: {{ currentCount }}</h1>
</template>
<style scoped></style>

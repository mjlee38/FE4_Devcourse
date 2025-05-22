<script>
export default {
  name: 'App',
  data() {
    return {
      age: 20,
    }
  },
}
</script>
<template>
  <div>
    <input type="range" v-model="age" min="1" max="100" />
    <p>{{ age }}</p>
  </div>
</template>
<style scoped></style>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedOption: 'apple',
    }
  },
}
</script>
<template>
  <div>
    <select v-model="selectedOption">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <p>{{ selectedOption }}</p>
  </div>
</template>
<style scoped></style>

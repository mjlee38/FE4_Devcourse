<script>
export default {
  name: 'App',
  data() {
    return {
      fruits: [],
    }
  },
}
</script>
<template>
  <div>
    <label> <input type="checkbox" v-model="fruits" value="apple" />apple </label>
    <label> <input type="checkbox" v-model="fruits" value="banana" />banana </label>
    <label> <input type="checkbox" v-model="fruits" value="orange" />orange </label>
    <p>{{ fruits.join(', ') }}</p>
  </div>
</template>
<style scoped></style>

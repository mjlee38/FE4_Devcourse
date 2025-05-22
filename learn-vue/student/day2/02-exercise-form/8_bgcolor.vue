<script>
export default {
  name: 'App',
  data() {
    return {
      color: '#ffffff',
    }
  },
}
</script>
<template>
  <input type="color" v-model="color" />
  <div
    :style="{
      width: '100px',
      height: '100px',
      border: '1px solid black',
      backgroundColor: color,
    }"
  ></div>
  <p>{{ color }}</p>
</template>
<style scoped></style>

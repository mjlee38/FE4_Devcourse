<script>
export default {
  name: 'App',
  data() {
    return {
      text: '',
    }
  },
}
</script>
<template>
  <div>
    <textarea v-model="text"></textarea>
    <p>{{ text }}</p>
  </div>
</template>
<style scoped></style>

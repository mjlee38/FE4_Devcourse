<script>
export default {
  name: 'App',
  data() {
    return {
      isAgree: false,
    }
  },
}
</script>
<template>
  <label> <input type="checkbox" v-model="isAgree" />약관에 동의합니다. </label>
  <p>{{ isAgree }}</p>
</template>
<style scoped></style>

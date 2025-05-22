<script>
export default {
  name: 'App',
  data() {
    return {
      gender: 'male',
    }
  },
}
</script>
<template>
  <div>
    <label>
      <input type="radio" name="gender" value="male" v-model="gender" />
      <input type="radio" name="gender" value="female" v-model="gender" />
    </label>
    <p>{{ gender }}</p>
  </div>
</template>
<style scoped></style>

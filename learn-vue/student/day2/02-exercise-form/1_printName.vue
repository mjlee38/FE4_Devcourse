<script>
export default {
  name: 'App',
  data() {
    return {
      userName: '',
    }
  },
  methods: {
    changeHandler(e) {
      this.userName = e.target.value
    },
  },
}
</script>
<template>
  <p>사용자 이름: {{ userName }}</p>
  <input type="text" :value="userName" @input="changeHandler" />
</template>
<style scoped></style>

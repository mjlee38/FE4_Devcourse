<script>
import CountDisplay from './CountDisplay.vue'
import CountButtons from './CountButtons.vue'

export default {
  name: 'CountGroup',
  components: {
    CountDisplay,
    CountButtons,
  },
}
</script>
<template>
  <CountDisplay />
  <CountButtons />
</template>
<style scoped></style>

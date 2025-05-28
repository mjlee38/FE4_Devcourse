<script setup>
import TheFooter from '@/components/common/TheFooter.vue'
import TheHeader from '@/components/common/TheHeader.vue'
</script>
<template>
  <TheHeader />
  <slot></slot>
  <TheFooter />
</template>
<style scoped></style>

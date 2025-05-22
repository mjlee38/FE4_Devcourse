<script>
export default {
  name: 'SecondChild',
  data() {
    return {}
  },

  // <SecondChild my-custom-value="dd" />
  // props 전달은 케밥 케이스로, 받을 때는 카멜 케이스로
  // props: ['myCustomValue'],

  props: {
    myCustomValue: {
      type: String,
    },
  },

  // 이벤트 전달 받을 때는 emits 속성으로
  emits: ['greet', 'printHello'],
  methods: {
    clickHandler() {
      this.$emit('greet')
    },
  },
}
</script>
<template>
  <h1>SecondChild Vue</h1>
  <h1>{{ myCustomValue }}</h1>
  <!-- 전달받은 이벤트 사용 (emit) -->
  <!-- <button @click="$emit('greet')">click</button> -->
  <button @click="clickHandler">greet</button>

  <!-- emit의 매개변수 : 호출할 이벤트, 전달할 값 -->
  <!-- printHello 호출할 때, 매개변수 전달 (여러개도 가능) -->
  <!-- <button @click="$emit('printHello', 'dd', 27)">hello</button> -->

  <!-- 배열, 함수, 객체 등으로 매개변수 전달 가능 -->
  <button @click="$emit('printHello', { name: 'dd', age: 27 })">hello</button>
</template>
<style scoped></style>

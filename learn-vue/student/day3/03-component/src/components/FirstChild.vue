<script>
export default {
  name: 'FirstChild',
  data() {
    return {}
  },

  // props: ['name', 'age'], -> vue에서 공식적으로 권장 x

  // 객체 형식으로 props 지정해서, 최소 type은 지정하는걸 권장함
  props: {
    name: {
      type: String, // String, Number, Array, Object, Boolean, Function, Symbol

      // 옵션 1 : 필수값 지정
      required: true,
    },
    age: {
      // <FirstChild name="dd" age="27" />
      // type: String, // 왜 Number 아님? 숫자로 전달하려면 v-bind 써야 함

      // <FirstChild name="dd" :age="27" />
      type: Number,

      // 옵션 2 : 기본값 지정
      // required, default 상충되는 속성이라 함께 사용 x
      default() {
        return 10
      },

      // 옵션 3 : props 값 검증
      // 부모로부터 전달받은 데이터를 검사함
      // 해당 props의 데이터만 검사함
      validator(value) {
        return value > 50
      },
    },
    email: {
      type: String,
      validator(value) {
        return value.includes('@') // @ 있으면 true, 없으면 false ( 경고만 뜰 뿐, 강제성은 없음 )
      },
    },
  },
}
</script>
<template>
  <h1>FirstChild Vue</h1>
  <h1>{{ name }}</h1>
  <h1>{{ age }}</h1>
</template>
<style scoped></style>

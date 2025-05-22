<script>
// watch
export default {
  name: 'App',
  data() {
    return {
      count: 0,
      amount: 0,
      numArr: [1, 2],
      numArrDeep: [1, 2],
      changeNumArr: [1, 2],
    }
  },
  watch: {
    // 데이터 속성의 변경사항 감시
    // 감시하고 싶은 데이터의 key와 같은 값으로 !
    // 매개변수의 식별자는 변경 가능 (ex. n, o 등으로 변경 가능)
    count(newValue, oldValue) {
      console.log('count 변경됨!!', newValue, oldValue)
    },
    amount() {
      console.log('amount 변경됨!!')
    },
    numArr() {
      console.log('numArr 변경됨!!')
    },
    // ⭐️ 깊은 사용법
    numArrDeep: {
      handler(n, o) {
        console.log('numArr 진짜 변경됨!!')
        // 참조값이 변경되지 않았기 때문에 이전, 현재 값이 같음
        console.log(n)
        console.log(o)
      },
      deep: true,
    },
    changeNumArr(n, o) {
      console.log(n, o)
    },
  },
}
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">click</button>
  <h1>Count: {{ amount }}</h1>
  <button @click="amount += 1">click</button>
  <h1>Count: {{ numArr }}</h1>
  <!-- 
    ‼️ 배열에 3이 추가는 됐는데 콘솔 출력 안됨
    - 어떤 데이터의 변경 사항을 감시한다는 원리가,
    - 변수에 할당된 값 자체가 변경 됐나 안됐나 감지
    - 참조 자료형의 변경사항을 감지하게 하려면 새로운 껍데기를 부여해야함.
    - 힙에 있는 실제 값만 바뀜. 스택에 있는 참조 자체는 그대로라 Vue는 변경 감지 못함
    -->
  <button @click="numArr.push(3)">push</button>
  <h1>Count: {{ numArrDeep }}</h1>
  <button @click="numArrDeep.push(3)">deep</button>
  <!-- 이전 참조, 현재 참조 변경 가능 -> 이럴 땐 deep 사용할 필요 x -->
  <h1>Count: {{ changeNumArr }}</h1>
  <button @click="changeNumArr = [...changeNumArr, 3]">change</button>
</template>
<style scoped></style>

<script>
export default {
  name: 'App',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
    }
  },
  // computed : 매개변수 전달할 수 없음, 데이터 속성을 기반으로 무언가를 계산
  computed: {
    evenSum() {
      console.log('computed evenSum')
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  methods: {
    evensSum(numArr) {
      console.log('method evenSum')
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    // 직접 참조
    evensSum2() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
}
</script>
<template>
  <!-- 
      💡 템플릿 안에서는 최대한 javascript 로직을 배제한다
         vue를 렌더링하는데 집중!
    -->
  <!-- 
      [ method, computed 차이 ]
      - vue에서 공식적으로 권장 : computed
      - 장점: 자동 캐싱 (한 번 계산한 결과면 그 계산된 결과를 캐싱해서 사용함), 여러번 사용하면 메모이제이션해서 첫번째거 제외하고는 메모리에 저장된거 가져다 씀
      - 메소드는 호출할 때마다 로직을 재실행 -> 콘솔에 6번 출력됨 (성능적 부담 ↑)
      
      ⭐️ vue) 데이터를 기반으로 무언가 계산을 해야한다면, computed 권장.
    -->
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>Computed EvenSum: {{ evenSum }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum: {{ evensSum(numArr) }}</h1>
  <h1>EvensSum2: {{ evensSum2() }}</h1>
  <!-- 
      [ 메모이제이션 풀리는 조건 ]
      - 내가 참조하고있는 데이터에 변화가 생겼을 때
  -->
  <button @click="numArr.push(8)">click</button>
</template>
<style scoped></style>

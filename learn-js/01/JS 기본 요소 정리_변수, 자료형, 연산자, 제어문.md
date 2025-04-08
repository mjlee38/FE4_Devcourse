# JS 기본 요소 정리: 변수, 자료형, 연산자, 제어문

## var, let, const

```jsx
// var, let, const
// let 변수를 선언 키워드 (o)
// const 상수를 선언 키워드 (x...)

// let 재할당이 가능한 변수
// const 재할당이 불가능한 변수 -> 이미 할당된걸 변경할 수는 있지만, 재할당은 안됨

const numArr = [10];
numArr.push(20);
console.log(numArr);
```

## 자료형

```jsx
// 기본 자료형
// 문자, 숫자, 논리, undefined, null, symbol, bigint

// 64비트 부동 소수점 방식으로 숫자를 다루고 있음
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(9007199254740991); // 9007199254740991
console.log(9007199254740995); // 9007199254740996 -> 제대로 처리를 못함
console.log(9007199254740995n); // 9007199254740995n

// 참조 자료형
// 배열, 함수, 객체
```

## 연산자

```jsx
// 1️⃣ **산술 연산자**
// +, -, *, /, %, **
console.log(2 ** 3); // 8

// 2️⃣ **증감 연산자**
// 2.1 ++
// 2.2 --

// 3️⃣ **대입 연산자**
// 3.1 = (대입연산자)
// 3.2 +=, -=, *=, /=, %=, **= (복합대입연산자)
let num = 10;
num = num + 20;
num += 20;

// 4️⃣ **비교 연산자**
// 4.1 동등(==), 일치(===), 부등(!=), 불일치(!==), ~보다 큰(>), ~보다 크거나 같은(>=), ~보다 작은(<), ~보다 작거나 같은(<=)

// 5️⃣ **삼항 연산자**
// 피연산자1 ? 피연산자2 : 피연산자3
// condition ? expr1 : expr2
console.log(true ? 10 : 20); // 10
console.log(false ? 10 : 20); // 20
console.log(true ? (false ? 10 : 15) : 20); // 중첩은 가능하지만, 1중첩 이상할거면 걍 if문 쓰기 -> 코드 가독성 해침

// 6️⃣ **논리 연산자**
// and, or, not
// and(&&) : expr1 && expr2 = true
// or || : expr1 || expr2 = true
// not !
console.log(!(false || false)); // !false -> true
console.log(!false || false); // true || false -> true

// .... 7️⃣ **비트 연산자** (x) -> 프런트엔드에서 배우지 않음. 왜? 쓸 일이 없음

```

**제어문 (Control Statements)**

- 조건문 (`if`, `switch`)
- 반복문 (`for`, `while`, `do...while`, `for...of`, `for...in` 등)
- 분기문 (`break`, `continue`, `return`, `throw` 등)

## 조건문

```jsx
// 조건문
// if, switch
// 표현식으로 조건 처리할 때 -> if (표현식? 값으로 평가 될 수 있는 식!)
// 값으로 조건 처리할 때 -> switch

let result = 10 + 20;
// let : 키워드, result : 식별자, = : 대입 연산자, + : 산술 연산자

/*
식별자는 어떤 키워드랑 만나느냐에 따라 이름이 달라짐
var, let, const : 변수명
function : 함수명
*/

if (score >= 90) {
  console.log('A');
// } else if (90 > score && score >= 80) {
} else if (score >= 80) {  // if문이 여기까지 왔다는건, 90점이 넘지 않았다는 뜻
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
}

//   switch   ==============================================

const area = '서울';
let baesonbi = 3000;
switch (area) {
  case '서울':
    baesonbi += 0;
    break;
  case '인천':
    baesonbi += 1000;
    break;
  case '경기':
    baesonbi += 1000;
    break;
  case '강북':
    baesonbi += 1000;
    break;
  case '강서':
    baesonbi += 1000;
    break;
}

// 의도적인 break 파괴
let baesonbi = 3000;
switch (area) {
  case '서울':
    baesonbi += 0;
    break;
  // 어차피 계속 같은 코드가 반복되니까 ⬇️ ⬇️ ⬇️ 이렇게도 씀 !!
  case '인천':
  case '경기':
  case '강북':
  case '강서':
    baesonbi += 1000;
    break;
  default:
    baesonbi += 1000;
}
console.log(baesonbi);
```

## 반복문

```jsx
// 반복문
// do...while, while, for
// for...in, for...of

// for...in -> 배열(인덱스)과 객체(키)
// for...of -> 배열(값)

do {
  // 한 번은 실행됨
  console.log('한번은 실행됨');
} while (false);

```

## 함수

```jsx
// 함수 선언문
function sum() {}

// 함수 표현식
const sum2= function sum2() {};

// 화살표 함수
const sum3 = (a, b) => {
  return a + b;
};

const sum4 = (a, b) => a + b;
```
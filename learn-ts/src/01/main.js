// ts 들어가기 전... js 필수 문법

// 1. 템플릿 문자열
// 1.1 백틱(`) 문자열을 정의하는 방법 -> 일부를 변수로 치환 가능 ${}
const uname = 'Sucoding';
const greet = `Hello, ${uname}!`;
console.log(greet);

// 2. 화살표 함수
// 2.1 화살표를 사용해서 함수를 정의하는 방법
// 2.1.1 함수 선언문
/*
function sum(a, b) {
  return a + b;
}
*/

// 2.1.2 함수 표현식
/*
const sum = function sum1(a, b) {
  return a + b;
};*/

// 2.1.3 화살표 함수
/*
const sum = (a, b) => {
  return a + b;
};

const sum = (a, b) => a + b;
*/

// 3. 구조 분해 할당(비구조화 할당)
// 3.1 분해해서 할당하겠다.

const foods = ['apple', 'banana', 'orange'];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);

const [a, b, c] = ['apple', 'banana', 'orange']; // [] 안 식별자 내 마음대로 사용 가능
console.log(a);
console.log(b);
console.log(c);

const [a1, ...rest] = ['apple', 'banana', 'orange'];
console.log(a1);
console.log(rest);

// 3.2 객체에서의 구조분해 할당
const animal = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 10,
  animalGender: 'male',
};

console.log(animal.animalName);
console.log(animal.animalType);
console.log(animal.animalAge);
console.log(animal.animalGender);

const {animalName, animalType, animalAge, animalGender} = {
  // {}안 식별자 : 속성의 key 값이랑 똑같이 적어야 함!
  // 똑같이 안하고 싶으면, animalName:aName 이런 식으로 치환하면 됨
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 10,
  animalGender: 'male',
};

console.log(animalName);
console.log(animalType);
console.log(animalAge);
console.log(animalGender);

const {
  id,
  profile: {name, age, gender},
} = {
  id: 1,
  profile: {
    name: '곰이',
    age: 10,
    gender: 'male',
  },
};
console.log(id, name, age, gender);

// 4. 계산된 속성
// 객체의 키를 변수로 치환
// react에서 (use state 처리할 때) 많이 사용함
const key = 'name';
const user = {
  [key]: 'sucoding',
};
console.log(user.name);

// 5. 스프레드 연산자
const [red, ...restColor] = ['red', 'blue', 'green'];
console.log(red);
console.log(restColor);

const {name1, ...restProperty} = {
  name1: 'sucoding',
  age: 20,
  gender: 'male',
};

console.log(name);
console.log(restProperty);

// 깊은 복사 처럼 보이는 얕은 복사 -> 결국은 얕은 복사임
// 깊은 복사 (deep copy) : 원본과의 참조가 완전히 끊어진 채로 복사
// 얕은 복사 (shallow copy)

/*
const colors = ['red', 'orang', 'banana'];
const copyColors = colors;
copyColors[0] = 'pink';

console.log(colors[0]);  // pink ... 왜??????
*/
const colors = ['red', 'orang', 'banana'];
const copyColors = [...colors]; // 이렇게 하면 안 바뀜! 왜????
copyColors[0] = 'pink';

console.log(colors[0]); // red

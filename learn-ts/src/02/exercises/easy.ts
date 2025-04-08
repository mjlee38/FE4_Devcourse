{
  // 1. string 타입을 사용하여 "Hello"라는 값을 갖는 문자열 변수를 선언하고, 이 값을 출력하세요.
  let greeting: string = 'Hello';
  console.log(greeting);

  // 2. number 타입을 사용하여 42라는 숫자를 갖는 변수를 선언하고, 출력하세요.
  let num1: number = 42;
  console.log(num1);

  // 3. boolean 타입을 사용하여 true 값을 갖는 변수를 선언하고, 출력하세요.
  let bool1: boolean = true;
  console.log(bool1);

  // 4. Array<number> 또는 number[] 타입을 사용하여 숫자 배열을 선언하고, 배열의 요소들을 출력하세요.
  let arr1: number[] = [1, 2, 3];
  for (let num of arr1) {
    console.log(num);
  }

  // 5. Array<string> 또는 string[] 타입을 사용하여 문자열 배열을 선언하고, 배열의 요소들을 출력하세요.
  let animals: string[] = ['강아지', '고양이', '곰', '토끼'];
  for (let animal of animals) {
    console.log(animal);
  }
  // 6. tuple 타입을 사용하여 숫자와 문자열이 섞인 튜플을 선언하고, 이 값을 출력하세요.
  let arr2: [number, string] = [1, 'apple'];

  // 7. null 타입을 사용하여 null 값을 갖는 변수를 선언하고, 이를 출력하세요.
  let nul: null = null;
  console.log(nul);

  // 8. undefined 타입을 사용하여 undefined 값을 갖는 변수를 선언하고, 이를 출력하세요.
  let undef: undefined = undefined;
  console.log(undef);

  // 9. object 타입을 사용하여 이름과 나이를 포함하는 객체를 선언하고, 이를 출력하세요.
  let obj: {
    name: string;
    age: number;
  } = {
    name: 'Alice',
    age: 20,
  };
  console.log(obj);
}

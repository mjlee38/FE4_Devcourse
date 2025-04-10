{
  /* 
    함수의 타입 지정
    - 매개 변수와 반환 값의 타입을 지정해주는 것
    - 함수라는 값 자체의 타입을 지정하지는 x
      const func: function = () => {} ❌
    - 반환값 : return으로 되돌려받는 값
    - 반환값 타입 지정 : 소괄호 뒤 콜론 + 타입
    - 함수의 매개변수는 타입추론 되지 x
    - 함수의 반환값이 담긴 변수는 타입 지정 x
  */

  // 함수 선언문
  // ex 01 : 반환값이 없는 함수
  function greet(): void {
    // void : 아무것도 반환하지 않는다
    console.log("Greet!");
  }
  greet();

  // ex 02 : 매개변수, 반환값 타입 지정
  function sum(n1: number, n2: number): number {
    return n1 + n2;
  }
  const result = sum(10, 20); // 일반적으로 함수의 호출값까지 타입 지정을 하지는 x (result:number → ❌)
  console.log(result);

  // ex 03
  function printValue(value: string): void {
    console.log(value);
  }
  printValue("A");

  // ex 04
  function add1(numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res1 = add1([1, 2, 3]);
  console.log(res1);

  function add2(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
  const res2 = add2(1, 2, 3);
  console.log(res2);

  // 함수의 매개변수는 타입추론 되지 않는다. (반환값은 추론 가능한 경우도 있음 -> return 뒤의 값이 명확한 경우 ex. return 10)
  function printObj(userObj: {name: string}): void {
    console.log(userObj.name);
  }
  printObj({name: "sucoding"});
}
{
  /* 
    함수 표현식
    - 함수 자체에 매개 변수와 반환 값의 타입을 지정하는 방법  ( ✅ 이걸 더 즐겨 쓰신다고 하심 ! )
    - 변수에 함수의 매개 변수와 반환 값의 타입을 지정하는 방법
  */
  // ex 함수에 타입 지정 01
  const greet1 = function greet1(): void {
    console.log("Greet!");
  };

  // ex 함수에 타입 지정 02
  function sum1(n1: number, n2: number): number {
    return n1 + n2;
  }

  // ex 변수에 타입 지정 01
  const greet2: () => void = function greet2() {
    // 매개변수는 없는데, 반환값은 void다.
    console.log("Greet!");
  };

  // ex 변수에 타입 지정
  const sum: (n1: number, n2: number) => number = function sum2(n1, n2) {
    return n1 + n2;
  }; // 타입 지정의 매개변수와 실제 함수의 매개변수 이름이 같을 필요는 x → (a: number, b: number) 이렇게 해도 ㄱㅊ, 근데 굳이?

  const sum2: (n1: number, n2: number) => number = function sum2(n1: number, n2: number): number {
    return n1 + n2;
  }; // 변수, 함수 모두에 타입 지정하는 것도 문법적으로 틀린건 x 그렇지만 굳이?

  const printValue: (value: string) => void = function printValue(value) {
    console.log(value);
  };
}
{
  /*
    화살표 함수
  */
  const greet1: () => void = () => {
    console.log("Greet!");
  };

  const sum: (n1: number, n2: number) => number = (n1, n2) => n1 + n2; // 변수에 타입 지정
  const sum2 = (n1: number, n2: number): number => n1 + n2; // 함수에 타입 지정

  const add: (...number: number[]) => number = (...numbers) =>
    numbers.reduce((result, numbers) => result + numbers, 0);
  const printObj: (userObj: {name: string}) => void = (userObj) => console.log(userObj.name);

  function add2(...numbers: number[]): number {
    return numbers.reduce((result, num) => result + num, 0);
  }
}

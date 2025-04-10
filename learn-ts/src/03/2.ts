{
  /* 
    유니온(언) 타입
    - | -> 파이프 기호
    - 여러개의 타입 중 하나임을 나타내고 싶을 때 !
    - 연산자라고 할 수 있음
    - 타입을 지정하는 곳 어디든지, 유니온 타입을 사용해 복수개의 타입을 지정할 수 있다!
  */

  function printValue(value: number | string | {name: string}): void {
    console.log(value);
  }
  printValue(10);
  printValue("A");
  printValue({name: "sucoding"});

  let value: number | string = 10;
  value = 20;
  value = "A";

  let nestedArray1: (string[] | number[])[] = [["apple", "banana"], [1, 2, 3], ["cherry"]];
  let nestedArray2: (string | number)[][] = [["apple", "banana"], [1, 2, 3], ["cherry"]];

  /* 유니온 타입 사용해 바꿔보기
  let items: [{id: number; name: string; price: number}, {id: number; name: string; price: number}, [string, number]] = [
    {id: 1, name: 'Item1', price: 100},
    {id: 2, name: 'Item2', price: 200},
    ['discount', 10],
  ];
  */

  let items: ({id: number; name: string; price: number} | (string | number)[])[] = [
    {id: 1, name: "Item1", price: 100},
    {id: 2, name: "Item2", price: 200},
    ["discount", 10],
  ];

  /*
   ⭐️ 소괄호 ()가 없는 경우
  let items2: {id: number; name: string; price: number} | (string | number)[][] = [
    {id: 1, name: "Item1", price: 100},
    {id: 2, name: "Item2", price: 200},
    ["discount", 10],
  ];
  ➡️ {id: number; name: string; price: number} 객체 거나, (string | number)배열이 담긴 중첩 배열 이거나
  */

  let dataSet: ({name: string; price: number} | [string, number])[] = [
    {name: "Item A", price: 100},
    ["item1", 50],
    {name: "Item B", price: 200},
    ["item2", 75],
  ];
}
{
  // 타입 가드 (Type Guard) -> 타입을 좁혀주는 행위
  // ex 01
  let items: ({id: number; name: string; price: number} | (string | number)[])[] = [
    {id: 1, name: "Item1", price: 100},
    {id: 2, name: "Item2", price: 200},
    ["discount", 10],
  ];
  if ("name" in items[0]) console.log(items[0].name); // 중괄호.... 생략 됐네...?

  // ex 02 (함수)
  function printValue(value: number | string): void {
    if (typeof value === "number") console.log(value.toFixed(0));
    else console.log(value);
  }

  // ex 03
  // const sum = (n1: number | string, n2: number | string): number | string => n1 + n2;
  // -> // ❌ 오류 발생 ! : TS는 유니온 타입과 유니온 타입의 덧셈이라고 받아드림 (n1 + n2)
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  console.log(sum(10, 20));
  console.log(sum("A", "B"));
}
{
  // never: 절대로 올 수 없는 값, 절대로 가질 수 없는 값
  function throwError(message: string): never {
    // 반환값 타입에 never가 오면 ? -> 이 함수는 절대 값을 반환할 수 없는 함수
    throw new Error(message); // 이 함수는 내부적으로 error를 발생시킴
  }

  // never vs void
  // - void : 이 코드는 무조건 error를 발생시키긴 하지만, 엄밀히 따지면 반환하고 있는게 없음, void라는 관점으로 봐도 ok, 문법적으로 문제 없음
  // - never : 타입스크립트의 타입 시스템 적으로, 에러 핸들링만 처리하는 별도의 함수를 만들어서 사용하고 있을 때,
  //           거기서는 반드시 error를 출력함, 그런 확신이 있다 ? -> never 사용 (의미론적으로 이 함수는 절대로 반환되지 않는 함수구나)

  function infinitLoop(): never {
    // 아무것도 반환하지 않는다는 점에서 void라고 할 수도 있겠지만, 이 코드는 영원히 뭔가를 반환할 수 없음 -> never
    while (true) {} // 내부에서 무한 반복이 끝나지 않음 -> 반환값이 없음
  }

  // never : 특수한 값이라 쓰지 않는다고 문제가 되지는 x (void로 취급하면 되니까)
  // 씀으로서 얻을 수 있는 이점 : 그 함수의 반환 타입을 명시적으로 알릴 수 있음 (얘는 절대 반환할 수 없는 함수구나 ~ return 하면 안되겠구나 ~ )
}
{
  // 함수 오버로드 function overload
  // - 함수 선언문에서만 사용 가능 (함수 표현식, 화살표 함수에는 x)
  // - 함수가 다양한 타입의 인자에 대해 다른 동작을 할 수 있도록 하는 기능 (함수의 매개변수나 반환값이 union일 때 사용하는 기법)

  // 탄생 배경
  const sum = (n1: number | string, n2: number | string): number | string => {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  };
  const result1 = sum(1.2, 2.3); // 분명히 숫자가 들어갔음에도, result1의 타입을 (number | string)이라고 판단함
  if (typeof result1 === "number") console.log(result1.toFixed(0)); // result1이 number라는 확신을 주면 에러 안남 -> 타입 가드
  const result2 = sum("A", "B");
  // sum 함수를 union 타입으로 연결했고, 함수의 결과값을 result1, result2에 담음
  // result1, result2에 담긴 데이터의 타입을 추측 -> 개발자는 알 수 있음 number, string 인걸
  // 누가봐도 result1은 숫자 타입인데 result1.toFixed(0) 사용하면 에러남 -> console.log(result1) -> 3.5 인데도 에러남

  // 내가 만약 이 함수의 호출 값을 받아서 굉장히 많은 코드에 갖다 쓸건데 그 때마다 if 문 붙여줘야 함?? 번거로운데?
  // -> 이걸 개선하기 위해 함수 오버로드 기법이 나옴
}
{
  // 함수 오버로드 사용 위해 함수 선언문 방식으로 바꾸기

  // 함수에 대한 타입을 TS가 옳바르게 이해할 수 있도록 의미나 기능적으로 보충해주는 것
  function sum(n1: number, n2: number): number;
  function sum(n1: string, n2: number): string;
  function sum(n1: number, n2: string): string;
  function sum(n1: string, n2: string): string;
  function sum(n1: number | string, n2: number | string): number | string {
    if (typeof n1 === "number" && typeof n2 === "number") return n1 + n2;
    else return `${n1}${n2}`;
  }

  const result1 = sum(1.2, 2.3);
  console.log(result1.toFixed(0)); // 오버로드 케이스에 만족하니까 if문 없어도 에러 안남 !

  const result2 = sum("A", "B");
}

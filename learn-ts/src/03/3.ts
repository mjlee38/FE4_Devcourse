{
  function printUserInfo1(name: string, age: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }
  printUserInfo1("sucoding", 20);
  // printUserInfo("sucoding"); -> 이건 에러남 !
  // js 에서는 else 로 실행돼서 문제 없으나 (매개변수가 2개 정의돼있어도 한개만 전달 가능), ts 에서는 에러남 (정의된 매개변수는 필수값 ! 반드시 모두 전달돼야 함)
}
{
  // 옵셔널 파라미터 : 매개변수의 옵션 여부 결정 가능
  // (객체일 땐, 옵셔널 속성)
  function printUserInfo2(name: string): void;
  function printUserInfo2(name: string, age: number): void;
  function printUserInfo2(name: string, age?: number): void {
    if (name && age) console.log(`${name}, ${age}`);
    else console.log(`${name}`);
  }
  printUserInfo2("sucoding");

  // 첫번째, 두번째 모두 옵셔널 o -> o
  // 첫번째: 옵셔널 o, 두번째: 옵셔널 x -> x
  // 왜? 어떤 매개변수던지 전달될 때는 반드시 첫번째 매개변수로 값이 전달돼서 ! -> 그럼 매개변수 3개일 때 2번만 옵셔널인 건 가능...?
}

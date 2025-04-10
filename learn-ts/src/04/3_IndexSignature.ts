{
  const obj: {
    name: string;
    age: number;
  } = {
    name: "sucoding",
    age: 20,
  };
  // 이렇게 하면 동적으로 속성을 추가하거나, 삭제하는 것 불가능
  // delete obj.age; ❌ 불가능 , 가능하게 하려면 age를 optional로
}
{
  // 💡 인덱스 시그니처 (Index Signature)
  // 범용적으로 타입을 지정할 때 사용하는 방법
  // 장점 : 한 번 타입을 정해두면, 얼마든지 속성을 추가 or 삭제 가능
  const obj: {
    [key: string]: string | number; // key는 string이고, 값은 string 또는 number 다.
  } = {
    name: "sucoding",
    age: 20,
  };
  obj.gender = "male"; // ⭕️ 가능
  delete obj.name; // ⭕️ 가능
  console.log(obj); // { age: 20, gender: 'male' }

  // 결국
  // 무슨 키가 무슨 값인지는 모름
  // name.toUpperCase(); // 속성에 할당된 값을 쓸 때는 불확실해서 사용하기 불편함 (타입가드 필요)

  // 장단점

  // 속성이 확실한 건 일반 속성 타입 지정하는 방법으로 지정, 그렇지 않은건 인덱스 시그니처 방법으로
  const obj1: {
    name: string;
    age: number;
    [key: string]: string | number; // key는 string이고, 값은 string 또는 number 다.
  } = {
    name: "sucoding",
    age: 20,
  };
  obj1.gender = "male"; // ⭕️ 가능
  // delete obj1.age;
  console.log(obj1);
  const name1 = obj1.name;
  name1.toUpperCase();
}
{
  /*
    객체라서 가능한 방법
    - 옵셔널 프로퍼티 -> ?
    - readonly 프로퍼티 -> readonly
    - 인덱스 시그니처
  */
}

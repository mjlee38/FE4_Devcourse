{
  // 1.
  let obj: {
    readonly name: string;
    readonly age: number;
    gender?: string; // 옵셔널 속성
  } = {
    name: 'sucoding',
    age: 20,
  };

  // readonly 속성은 변경할 수 없다
  // obj.name = 'jane';  ❌ Cannot assign to 'name' because it is a read-only property.
  // obj.age = 30;  ❌ Cannot assign to 'age' because it is a read-only property.

  // 추후에 속성을 동적으로 추가
  // 처음에는 필요 없지만 나중에 필요한 것들을 위해
  obj.gender = 'Female'; // ❌ 타입 오류 발생 -> 옵셔널 속성으로 지정해야됨
}

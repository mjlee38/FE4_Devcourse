{
  // 타입 별칭 -> 첫 글자는 대문자로 !
  // type -> 나만의 타입을 지정하는 방법

  // ex
  let level1: number = 10; // 여기서 number 는 typescript의 type system이 만들어준, 기본적으로 system에 존재하는 type

  type Level = number;
  let level2: Level = 10;

  // ex
  type Id = {
    id: number;
  };
  type Value = {
    value: string;
  };
  type Attributes = {weight: number; color: string};
  type ComplexType = Id & Value & {attributes: Attributes};

  type ComplexStructure = ComplexType[];
  let complexStructure: ComplexStructure = [
    {id: 1, value: "apple", attributes: {weight: 1.2, color: "green"}},
    {id: 2, value: "banana", attributes: {weight: 0.5, color: "yellow"}},
    {id: 3, value: "cherry", attributes: {weight: 0.2, color: "red"}},
  ];
}

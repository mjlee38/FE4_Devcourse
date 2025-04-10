{
  type User = {
    name: string;
    age: number;
  };

  type Developer = {
    skill: string;
  };

  let humon: User = {
    name: "sucoding",
    age: 20,
  };

  let developer01: User & Developer = {
    name: "sucoding",
    age: 20,
    skill: "TypeScript",
  };
}

{
  type User = {name: string; age: number};
  type Developer = {skill: string};
  type HumonDeveloper1 = User & Developer;
  type HumonDeveloper2 = User | Developer;
  // 실무에서는 이런식으로 타입을 작게 쪼개서 유니언 타입이나, 인터섹션 타입으로 조합해서 쓰는 경우가 많음 !!

  let developer01: HumonDeveloper1 = {
    name: "sucoding",
    age: 20,
    skill: "TypeScript",
  };
}

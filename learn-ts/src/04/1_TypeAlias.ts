{
  /* 
    타입별칭 이점
    1. 가독성이 좋아진다.
    2. 유지보수성이 증가한다. → 타입을 재사용할 수 있기 때문
  */

  let userId1: string = "hulk";
  let productId1: number = 1; // 이거도 틀리진 않지만

  type ID = string | number;
  let userId2: ID = "hulk";
  let productId2: ID = 1; // ✅ 이게 가독성이 더 좋음 (이 변수에 들어가는건, id값과 관련됐겠구나 추측 가능)

  // 유지보수성이 증가한다는건,
  // id 값에 null이 허용되게 추후에 규칙이 바뀐 경우?
  type Id = string | number | null; // ✅ 이거 하나만 수정하면 됨 !
  let userId3: Id = "hulk";
  let productId3: Id = 1;
}

{
  // 타입 별칭 사용 x
  const user1: {
    name: string;
    age: number;
  } = {
    name: "alice",
    age: 20,
  };
  const user2: {
    name: string;
    age: number;
  } = {
    name: "alice",
    age: 20,
  };
}

{
  // 타입 별칭 사용 o
  type User = {
    name: string;
    readonly age?: number; // readonly, optional property 가능 ! → readonly는 항상 속성 앞에만 ! (type 별칭 이름 앞에 불가능)
  };
  const user1: User = {
    name: "alice",
    age: 20,
  };
  const user2: User = {
    name: "alice",
    age: 20,
  };
}
{
  // 유틸리티 타입 맛보기
  type User = {
    name: string;
    age: number;
  };
  const user1: Readonly<User> = {
    // readonly 안 붙은 모든 속성이 전부 readonly로 !
    name: "alice",
    age: 20,
  };
  // user1.age = 30; ❌ 재할당 불가능 readonly type 이니까 !
}
{
  // 💡 리터럴 타입도 타입 별칭으로 가능 !
  type Status = "error" | "success";
  const status: Status = "error";
}
{
  // 💡 함수
  // function sum(n1: number, n2: number): number { return n1 + n2; } -> 이 형태로는 타입 별칭 사용 불가능
  // 함수 표현식 형태의 함수만 타입 별칭 사용 가능
  // const sum: (n1: number, n2: number) => number = function sum(n1, n2) {return n1 + n2;}; 함수 표현식 형태로 먼저 바꾼 후 타입 별칭 !
  type SumFunc = (n1: number, n2: number) => number;
  const sum: SumFunc = function sum(n1, n2) {
    return n1 + n2;
  };
}
{
  // 💡 튜플
  type Point = [number, number]; // 숫자 2개로 구성된 배열이라는 느낌을 확실히 주기 위해서는 number[] 보다는 [number, number]
  const point: Point = [10, 15];
}
{
  // 💡 인터섹션으로 조합 가능 !
  type Nameable = {
    name: string;
  };
  type Ageable = {
    age: number;
  };
  type Person = Nameable & Ageable; // 인터섹션으로 조합해서 새로운 타입 정의 가능 (기존의 타입이 재료로 활용될 수도 있다 !)
  // 이렇게 조합해도 되지만 Person 타입이 훨씬 가독성 좋음 !
  type PersonOther = {
    name: string;
  } & {
    age: number;
  };
}
{
  // 💡 키 선택 타입 별칭 (keyof)
  type Person = {
    name: string;
    age: number;
    gender: string;
  };
  // 해당 대상의 키 값 추출 = "name" | "age" | "gender" 라는 리터럴 타입과 똑같아짐
  // 이미 정해져있는 타입의 key를 가지고 새로운 타입을 만들고 싶을 때 사용하는 기법
  // keyof 를 사용하면, 객체로 지정된 타입이 리터럴로 반환됨
  type PersonOfKeys = keyof Person;
  const key: PersonOfKeys = "age";
}
{
  // 💡 객체 선택 타입 별칭 (typeof)
  const user = {
    name: "sucoding",
    age: 20,
  };
  type User = typeof user; // 객체에 들어간 타입을 추출, 이 이후에 이 타입을 활용 가능
  const user2: User = {
    name: "a",
    age: 30,
  };
}
{
  // 타입스크립트는 정적 언어이기 때문에 type 선언 부분의 위치가 이렇게 돼도 ok
  type User = typeof user;

  const user = {
    name: "sucoding",
    age: 20,
  };

  const user2: User = {
    name: "a",
    age: 30,
  };
}
{
  /*
    런타임 vs 컴파일
    런타임: 그때그때 필요할 때마다 위 -> 아래 코드를 실행 (ex. JavaScript)
    컴파일: 내가 실행할 코드를 한번 쭉 훑어 정리한 뒤 실행 (ex. TypeScript) -> 컴파일러가 수행함
    -> 타입별칭은 문법적인 에러만 없다면 위치, 순서는 상관 없다 !
  */
}
{
  type Nameable = {
    name: string;
  };
  type Ageable = {
    age: number;
  };
}
{
  // 타입 추론해준거 그대로 복사
  type Category = {
    name: string;
    subCategory: (
      | {
          name: string;
          subCategory?: undefined; // ✅ optional 임
        }
      | {
          name: string;
          subCategory: {
            name: string;
          }[];
        }
    )[];
  };

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}
{
  type Category = {
    name: string;
    subCategory: {name: string; subCategory?: {name: string}[]}[];
  };
  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}
{
  // subCategory의 타입을 배웠던 타입 지정 방법으로 개선해보기
  type Category = {
    name: string;
    subCategory: {name: string; subCategory?: {name: string}[]}[];
  };
  // 둘이 모양이 똑같음
  // {name: string; subCategory?: {name: string}[]}
  /*
  {
    name: string;
    subCategory: {...}[];
  }
  */

  const category: Category = {
    name: "Electronics",
    subCategory: [
      {
        name: "Phones",
      },
      {
        name: "Laptops",
        subCategory: [
          {
            name: "Gaming Laptops",
          },
        ],
      },
    ],
  };
}
{
  // 재귀타입 별칭
  type Category1 = {
    name: string;
    subCategory: {name: string; subCategory?: {name: string}[]}[];
  };
  // 둘이 모양이 똑같음
  // {name: string; subCategory?: {name: string}[]}
  /*
  {
    name: string;
    subCategory: {...}[];
  }
  */
  type Category2 = {
    name: string;
    subCategory?: Category2[]; // ✅ 재귀타입 별칭 !, 뭔가 무한 증식될 것 같지만... 그렇지는 않음
  };
}
{
  // 1단계 : 타입 추론 그대로 복사
  type Tree1 = {
    value: string;
    children: {
      value: string;
      children: {
        value: string;
      }[];
    }[];
  };

  // 2 children만 다시 정의
  type Tree = {
    value: string;
    children: [{value: string; children: []}]; // tuple 방식으로
    // {value: string; children: []} 이 모양이
    /* Tree = {
    value: string;
    children: [{ value: string; children: [] }]
    }; 이 모양과 같음
    */
  };

  type Tree2 = {
    value: string;
    children?: Tree2[]; // '?' 안 붙여도 타입스크립트의 문법적 허용으로 에러가 발생하지는 않지만, 붙이는 편이 확실함 !
  };

  const tree: Tree1 = {
    value: "root",
    children: [
      {
        value: "child1",
        children: [
          {
            value: "child2",
          },
        ],
      },
    ],
  };
}

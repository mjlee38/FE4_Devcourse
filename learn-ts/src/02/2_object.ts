{
  // 객체

  // ✅ 빈 객체 지정 1 (object)
  let obj: object = {}; // -> 배열, 함수 할당 가능

  // 래퍼 객체
  // 원시 타입 (primitive type): 최상위 object로부터 떨어져나온 데이터 값
  // -> 할당 불가능
  /*
  obj = null;
  obj = undefined;
  obj = 10;
  obj = 'A';
  */

  // 할당 가능
  // -> 배열, 함수는 object 객체를 직접적으로 상속받아서
  obj = [];
  obj = function () {};
}
{
  // ✅ 빈 객체 지정 2 ({ })
  let obj: {} = {}; // null과 undefined를 제외한 모든 값을 허용하겠다가 됨
  // 할당 불가능
  /*
  obj = null;
  obj = undefined;
  */
  // 할당 가능
  obj = 10;
  obj = 'A';
  obj = [];
  obj = function () {};
  // 따라서 빈 객체의 타입을 지정하는 건 우리의 의도대로 지정하기가 어려움 -> 그럼 어떻게?? -> 유틸리티 타입 !
}
{
  // ✅ 유틸리티 타입 (Record<string, never>)
  // 타입스크립트에서 특정 타입을 지정하기 위해 미리 만들어놓은 함수
  // 즉, Record라는 이미 만들어진 함수의 기능을 통해 새로운 타입의 유형을 만들어낸 것
  let obj: Record<string, never> = {};
  // Record<string, never> -> 객체의 키 값은 문자열인데, 객체의 속성 값은 절대 올 수 없다. -> 빈 객체
  obj = {};
  // ⬇️ 전부 할당 불가능해짐 !
  /*
  obj = null;
  obj = undefined;
  obj = 10;
  obj = 'A';
  obj = [];
  obj = function () {};
  */
}
{
  // 객체 타입 지정 예시

  let foodArr: {id: number; foods: string[]}[] = [
    {id: 1, foods: ['apple']},
    {id: 2, foods: ['banana']},
  ];

  const user: {
    name: string;
    age: number;
  } = {
    name: 'sucoding',
    age: 20,
  };

  let userObj: {
    id: number;
    name: string;
    address: {
      zipCode: number;
      street: string;
    };
  } = {
    id: 1,
    name: 'sucoding',
    address: {
      zipCode: 13111,
      street: 'Gang-Nam',
    },
  };

  let jsonObject: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];
}

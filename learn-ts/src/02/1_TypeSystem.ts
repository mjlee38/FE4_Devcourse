{
  let num: number = 10;
  // 똑같은 코드를 서로 다른 파일에 입력하면 에러가 남
  // 왜? tsconfig.json 파일이 영향을 미치는 모든 파일을 일괄적으로 인식해서 검사함

  // 1. string
  let name: string = 'Alice';
  let greeting: string = `Hello,${name}`;
  let multiLine: string = `This is
  a multiline string`;

  // 2. number(숫자)
  let age: number = 10; // 10진수
  let hex: number = 0xff; // 16진수
  let binary: number = 0b1010; // 2진수
  let float: number = 3.14; // 실수

  // 3. boolean(논리형)
  // truthy, falsy
  // falsy : false, 0, -0, '', null, undefined, NaN
  // truthy : falsy를 제외한 모든 값
  let bool1: boolean = true;
  let bool2: boolean = false;
  let bool3: boolean = !0;
  let bool4: boolean = 10 > 20;

  // 4. null
  let nothing: null = null;

  // 5. undefined
  let notDefined: undefined = undefined;

  // 6. any - 아무거나 허용하겠다
  // -> 타입을 검사하지 않겠다.
  // -> 타입 검사를 무력화 하는 타입이기 때문에 남용을 피해야 함.
  let anything: any = 10;
  anything = 20;
  anything = 'A';
  anything = true;
  anything = null;
  anything = undefined;
  // anything.toFixed(2); // toFixed는 숫자형에만 사용 가능한데, undefined임에도 ts는 이상한걸 찾지 못함, 실행을 하면 그제서야 오류가 남

  // 7. unknown (any 순한맛, 안전한 any)
  // -> 타입 검사를 하지 않는다
  // -> 단, 그 값을 사용하려고 할 때는 타입을 검증해야 함. (모든 값을 넣을 수는 있지만, 문법적인 검사는 함)
  let input: unknown = 'Hello';
  input = 10;
  input = true;
  input = undefined;
  input = 3.14;
  // console.log(input.toFixed(2)) -> 타입 에러가 남

  // number라는 확신을 주면 사용 가능함
  // ??? number라는 확신을 주고 unknown을 쓸 바에는 그냥 number를 쓰는게 낫지 않나…?
  if (typeof input === 'number') console.log(input.toFixed(0));

  // 8. 배열(array)
  let arr: [] = []; // 배열은 실제로 이 안에 무슨 값이 들어가느냐가 중요함
  let numArr: number[] = [10, 20];
  let strArr: string[] = ['a', 'b', 'c'];
  let boolArr: boolean[] = [true, false];
  let undefinedArr: undefined[] = [undefined, undefined];
  let nullArr: null[] = [null, null];
  let objectArr: {}[] = [{}, {}];
  // ??? 그럼 여러개의 타입을 한 배열에 넣을 수는 없음..? -> tuple..!!
  // n차원 배열
  let matrix: number[][] = [
    // number[][]: number 배열이 들어간 배열
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let cube: number[][][] = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
    [
      [9, 10],
      [11, 12],
    ],
  ];

  // 9. 튜플(tuple)
  // 특정 형태를 갖는 배열을 의미 -> 고정된 인덱스에 고정된 형태의 값만 올 수 있음
  let mixArr1: [number, string] = [10, 'a'];
  let mixArr2: [number, number[]] = [10, [20, 30]];
  let mixArr3: [number, [], {}] = [10, [], {}];

  let mixTuple: [number, string, {}][] = [
    [1, 'hello', {key: 'value'}],
    [2, 'hi', {key: 'example'}],
  ];

  // 10. bigint
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  const bigNumber: bigint = 9007199254740997n;
  console.log(bigNumber);

  // bigint는 bigint끼리만 연산 가능
  console.log(100n + 200n);
  // 100n, 200n 너무 작지 않나? : 숫자의 크기와 관계없이 'n'이 붙으면 bigint 타입인 것
  // console.log(100n + 200); -> 불가능
}

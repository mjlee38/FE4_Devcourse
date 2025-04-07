/*
  TypeScript = JavaScript + 타입시스템을 추가한 언어
  (js를 포함하고 있음)
*/

// TypeScript의 대표적 type system
// 타입스크립트는 결국 값의 타입을 지정해주는 것

// 타입스크립트를 왜 어렵게 느끼냐? -> 값에 대한 타입을 지정하는 방법이 많음

// string, number, boolean, object, array, symbol, tuple, undefined, null, any, bigint
{
  let name: string = 'sucoding';
  let age: number = 20;
  let bool: boolean = true;
  let obj: object = {};
  let arr: [] = [];
  let sym: symbol = Symbol('a');
  let nul: null = null;
  let big: bigint = 100n;
}

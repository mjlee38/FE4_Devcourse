type TodoItem = { id: number; text: string; done: boolean };
// 구별된 유니온 타입
type TodoReducerAction =
  | {
      type: "ADD_TODO";
      payload: string;
    }
  | {
      type: "TOGGLE_TODO";
      payload: number;
    }
  | {
      type: "DELETE_TODO";
      payload: number;
    };

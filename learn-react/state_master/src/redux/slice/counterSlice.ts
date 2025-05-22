import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 리듀서 함수
// useReducer()
// state, action
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    value: 0,
  },
  // 상태 값을 업데이트 할 수 있는 로직
  // { payload }
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state, action: PayloadAction<{ num: number }>) {
      state.value -= action.payload.num;
    },
    reset(state) {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

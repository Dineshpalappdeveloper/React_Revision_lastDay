import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;
const CounterSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        add: (state, { payload }) => state += payload,
        Sub: (state, { payload }) => state -= payload,
    }
})

export const { add, Sub } = CounterSlice.actions
export default CounterSlice.reducer

import { configureStore } from "@reduxjs/toolkit";
import CounterSlice1 from "./CounterSlice1";

export const CounterStore = configureStore({
    reducer: {
        counter: CounterSlice1
    }
})
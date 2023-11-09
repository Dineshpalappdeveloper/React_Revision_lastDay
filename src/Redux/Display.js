import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sub, add } from './CounterSlice1';

function Display() {
    const dispatch = useDispatch();
    const { count } = useSelector(state => state)
    console.log(count);
    function handleAdd() {
        dispatch(add(5))
        console.log("helo1");
    }
    function handleSub() {
        dispatch(Sub(1))
        console.log("helo13");
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleSub}>Decrement</button>
        </>
    )
}

export default Display

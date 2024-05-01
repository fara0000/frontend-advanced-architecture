import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';

const initialState: CounterSchema = {
    value: 0,
};

/**
    Slice обьект для Counter который имеет actions, reducers, initialState
    Можно текущий обьект протипизировать через дженерики
    Первым аргуметом в тип дженерик createSlice добавляется тип initialState, дальше нужно добавлять для reducer и для имени
*/
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // immutable state comparing to simple redux
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

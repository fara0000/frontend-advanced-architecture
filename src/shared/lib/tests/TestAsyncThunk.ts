import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { User } from 'entities/User';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    /**
        Для переиспользование вызова asyncThunk

        Пример с реализаций без callThunk:
         const action = loginByUsername({ username: '123', password: '123' });
         const result = await action(dispatch, getState, undefined);

        Пример с реализаций c callThunk:
         const thunk = new TestAsyncThunk(loginByUsername);
         const result = await thunk.callThunk({ username: '123', password: '123' });
     */

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}

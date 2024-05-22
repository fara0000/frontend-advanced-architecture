import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
    /**
        Пример тестов без TestAsyncThunk
    */
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // // будет вызываться перед каждым тестом
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    test('dd', () => {
        console.log('112');
    });
    //
    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     // loginByUsername - это asyncThunk который по факту action creator
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // asyncThunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('401 response error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 401 }));
    //     // loginByUsername - это asyncThunk который по факту action creator
    //     const action = loginByUsername({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     // обычно 3 раза в нашем случае вызывается и так как последний диспатч не вызвался то будет 2
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // asyncThunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    /**
        Пример тестов c реализаций TestAsyncThunk
    */

    // test('success login', async () => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //
    //     const thunk = new TestAsyncThunk(loginByUsername);
    //     const result = await thunk.callThunk({ username: '123', password: '123' });
    //
    //     expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // asyncThunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('401 response error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 401 }));
    //     // loginByUsername - это asyncThunk который по факту action creator
    //     const thunk = new TestAsyncThunk(loginByUsername);
    //     const result = await thunk.callThunk({ username: '123', password: '123' });
    //
    //     // обычно 3 раза в нашем случае вызывается и так как последний диспатч не вызвался то будет 2
    //     expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     // asyncThunk отработал без ошибки
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });
});

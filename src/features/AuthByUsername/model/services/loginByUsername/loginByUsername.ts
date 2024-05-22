import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/localStorage/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export interface LoginByUsernameData {
    username: string;
    password: string;
}

// createAsyncThunk generic arguments return - User, get - LoginByUsernameData, ThunkConfig - config data with error attribute
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameData,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            // имитация токена
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

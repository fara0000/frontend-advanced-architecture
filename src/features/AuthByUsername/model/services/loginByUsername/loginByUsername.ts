import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/localStorage/localStorage';

interface LoginByUsernameData {
    username: string;
    password: string;
}

// createAsyncThunk generic arguments return - User, get - LoginByUsernameData, rejectValue - error in getting data
export const loginByUsername = createAsyncThunk<User, LoginByUsernameData, {rejectValue: string}>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });

            if (!response.data) {
                throw new Error('no user data from server');
            }

            // имитация токена
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.error(e);

            return thunkAPI.rejectWithValue('error getting user data');
        }
    },
);

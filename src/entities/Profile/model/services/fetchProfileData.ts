import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../types/profile';

export interface LoginByUsernameData {
    username: string;
    password: string;
}

// createAsyncThunk generic arguments return - User, get - LoginByUsernameData, ThunkConfig - config data with error attribute
export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    '/profile',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

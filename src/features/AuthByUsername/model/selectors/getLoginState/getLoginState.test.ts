import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return correct data', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: '',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false,
            error: '',
        });
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({ error: 'error' });
    });
});

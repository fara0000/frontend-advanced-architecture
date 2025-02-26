import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('should setUsername ', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('123'))).toEqual({ username: '123' });
    });
    test('should setPassword ', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };

        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});

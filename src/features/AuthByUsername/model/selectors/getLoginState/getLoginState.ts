import { StateSchema } from 'app/providers/StoreProvider';

const defaultLoginFormValue = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const getLoginState = (state: StateSchema) => state?.loginForm || defaultLoginFormValue;

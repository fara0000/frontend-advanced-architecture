import React, {
    FC, memo, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button,
    Text,
    Input,
    TextTheme,
    ButtonTheme,
} from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import style from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

export interface LoginFormProps {
    className?: string;
}

// выносим за пределы компонента, функции чтобы не создавался обьект каждый раз
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        error,
        isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(style.LoginForm, {}, [className])}>
                <Text title={t('AUTHORIZATION_FORM')} />
                {error && <Text text={t('INCORRECT_LOGIN_DATA')} theme={TextTheme.ERROR} />}
                <Input
                    autofocus
                    type="text"
                    className={style.input}
                    placeholder={t('ENTER_USERNAME')}
                    onChange={onChangeUsername}
                />
                <Input
                    type="text"
                    className={style.input}
                    placeholder={t('ENTER_PASSWORD')}
                    onChange={onChangePassword}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={style.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('SIGN_IN')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

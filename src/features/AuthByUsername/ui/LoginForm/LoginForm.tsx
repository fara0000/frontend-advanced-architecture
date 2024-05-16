import React, { FC, useCallback } from 'react';
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
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import style from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface Props {
    className?: string;
}

export const LoginForm: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
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
    );
};

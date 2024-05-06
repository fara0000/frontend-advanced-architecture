import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { Input } from 'shared/ui/';
import style from './LoginForm.module.scss';

interface Props {
    className?: string;
}

export const LoginForm: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(style.LoginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                className={style.input}
                placeholder={t('ENTER_USERNAME')}
            />
            <Input
                type="text"
                className={style.input}
                placeholder={t('ENTER_PASSWORD')}
            />
            <Button
                className={style.loginBtn}
            >
                {t('SIGN_IN')}
            </Button>
        </div>
    );
};

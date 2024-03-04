import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ErrorPage.module.scss';

interface Props {
    className?: string;
}

export const ErrorPage: FC<Props> = ({ className }) => {
    const { t } = useTranslation('error');

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <p className={styles.text}>{t('UNPREDICTABLE_ERROR_HAPPENED')}</p>
            <Button onClick={reloadPage}>
                {t('RELOAD_PAGE')}
            </Button>
        </div>
    );
};

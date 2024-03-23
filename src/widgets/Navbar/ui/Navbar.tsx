import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                /
            </div>
        </div>
    );
};

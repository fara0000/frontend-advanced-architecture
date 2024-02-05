import React, { FC } from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.modules.scss'
import {AppLink, AppLinkTheme} from "shared/ui";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

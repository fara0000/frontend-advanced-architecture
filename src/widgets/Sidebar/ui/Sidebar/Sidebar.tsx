import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink, AppLinkTheme, Button, LangSwitcher, ThemeSwitcher,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePaths } from 'app/providers/Router/lib/routeConfig';
import styles from './Sidebar.module.scss';

interface Props {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePaths.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('MAIN')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePaths.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('ABOUT')}
                    </span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={styles.lang}
                />
            </div>
        </div>
    );
};

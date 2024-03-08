import React, { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface Props {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className || ''])}
        >
            <Button onClick={onToggle} data-testid="sidebar-toggle">toggle</Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

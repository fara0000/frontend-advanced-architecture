import React, {FC, useState} from 'react';
import styles from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface Props {
    className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className || ""])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

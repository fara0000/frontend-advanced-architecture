import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<Props> = ({
    className,
    children,
    theme,
    ...otherProps
}) => {
    return (
        <button
            className={classNames(styles.Button, {[styles[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};


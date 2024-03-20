import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, type FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<Props> = ({
    className,
    children,
    theme,
    ...otherProps
}) => (
    <button
        className={classNames(styles.Button, { [styles[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </button>
);

import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import styles from './AppLink.module.scss';
import { AppLinkTheme } from './types';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => (
    <Link
        to={to}
        className={classNames(styles.link, { [styles[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </Link>
);

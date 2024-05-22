import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';
import { AppLinkTheme } from './types';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo(({
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}: AppLinkProps) => (
    <Link
        to={to}
        className={classNames(styles.link, { [styles[theme]]: true }, [className])}
        {...otherProps}
    >
        {children}
    </Link>
));

import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

/* TODO: Добавить семантику тегов (h1, p, span и ткд) */
export const Text: FC<Props> = ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
}: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Container, { [styles[theme]]: true }, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};

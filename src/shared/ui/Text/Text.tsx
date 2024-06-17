import React, { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface Props {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

/* TODO: Добавить семантику тегов (h1, p, span и ткд) */
export const Text: FC<Props> = ({
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
}: Props) => {
    const mods: Mods = {
        [styles[theme]]: true,
        [styles[align]]: true,
    };

    return (
        <div className={classNames(styles.Container, mods, [className])}>
            {title && <p className={styles.title}>{title}</p>}
            {text && <p className={styles.text}>{text}</p>}
        </div>
    );
};

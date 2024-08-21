import React, { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import styles from './Code.module.scss';

interface Props {
    className?: string;
    text: string;
}

export const Code: FC<Props> = memo(({ className, text }: Props) => {
    const onCopy = useCallback(() => {
        // для копирование текста в браузерах
        navigator.clipboard.writeText(text);
    }, [text]);

    // тег pre нужен для того чтобы сохранить все пробелы, переносы и тд, всю структуру
    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <Button className={styles.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
                <CopyIcon className={styles.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});

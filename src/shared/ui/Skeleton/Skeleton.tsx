import React, { CSSProperties, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface Props {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton: FC<Props> = memo(({
    className,
    width,
    height,
    border,
}: Props) => {
    const inlineStyles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(styles.Skeleton, {}, [className])} style={inlineStyles}>
            $
        </div>
    );
});

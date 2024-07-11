import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

interface Props {
    className?: string;
}

const ArticleDetailsPage: FC<Props> = ({ className }) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(styles.Container, {}, [className])}>
            $
        </div>
    );
};

export default memo(ArticleDetailsPage);

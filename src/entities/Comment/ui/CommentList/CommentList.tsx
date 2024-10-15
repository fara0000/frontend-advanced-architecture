import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui';
import { CommentCard } from 'entities/Comment';
import { Comment } from '../../model/types/comment';
import styles from './CommentList.module.scss';

interface Props {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: Props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Container, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        className={styles.comment}
                        isLoading={isLoading}
                    />
                ))
                : <Text text={t('NO_COMMENTS')} />}
        </div>
    );
});

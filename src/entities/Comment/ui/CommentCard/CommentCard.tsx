import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment/model/types/comment';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar, Text } from 'shared/ui';
import styles from './CommentCard.module.scss';

interface Props {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: Props) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.CommentCard, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={styles.username} />
                </div>
                <Skeleton className={styles.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <div className={styles.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text className={styles.username} title={comment.user.username} />
            </div>
            <Text className={styles.text} text={comment.text} />
        </div>
    );
});

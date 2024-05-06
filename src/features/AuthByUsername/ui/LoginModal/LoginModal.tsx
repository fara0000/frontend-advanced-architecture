import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface Props {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }: Props) => {
    const b = '';

    return (
        <Modal className={classNames(styles.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </Modal>
    );
};

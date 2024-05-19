import React, { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import styles from './LoginModal.module.scss';

interface Props {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }: Props) => (
    <Modal className={classNames(styles.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);

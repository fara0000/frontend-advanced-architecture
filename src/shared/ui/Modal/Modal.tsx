import React, {
    FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface Props {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<Props> = ({
    className,
    isOpen,
    onClose,
    children,
}) => {
    const [isClosing, seIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen, // анимация при открытие
        [styles.isClosing]: isClosing, // анимация при закрытие
    };
    const { theme } = useTheme();

    const closeModal = () => {
        if (onClose) {
            seIsClosing(true);
            // для плавной анимации
            timerRef.current = setTimeout(() => {
                onClose();
                seIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    // @params event should be types as Typescript KeyboardEvent type NOT REACT
    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

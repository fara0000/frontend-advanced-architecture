import React, {
    FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface Props {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    // чтобы модалка монтировалась тогда когда мы ее открываем а не в самом начале как обычно
    // так же это поможет оптимизировать бандл то есть в банл моддалка попадет только тогда когда мы ее откроем
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<Props> = ({
    className,
    isOpen,
    onClose,
    children,
    lazy,
}) => {
    const [isClosing, seIsClosing] = useState(false);
    const [isMountedInDom, setIsMountedInDom] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const mods: Mods = {
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
            setIsMountedInDom(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMountedInDom) {
        return null;
    }

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

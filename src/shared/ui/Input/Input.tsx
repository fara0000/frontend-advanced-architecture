import React, {
    FC, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

// Для переопределение типов тех которых нам нужно иначе TS ругается
interface HTMLInputElementProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{}

// Для того чтобы расширять текущую реализацию инпута от нее наследуемся
interface Props extends HTMLInputElementProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input: FC<Props> = memo((props: Props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        // чтобы сразу был фокус на инпуnе который задан autofocus
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    // Для позиции корректки
    const onSelect = (e: SyntheticEvent<HTMLInputElement, InputEvent>) => {
        setCaretPosition(e?.currentTarget?.selectionStart || 0);
    };

    return (
        <div className={classNames(styles.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={styles.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    value={value}
                    type={type}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    onChange={onChangeHandler}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});
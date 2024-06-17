import React, {
    InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

// Для переопределение типов тех которых нам нужно иначе TS ругается
interface HTMLInputElementProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>{}

// Для того чтобы расширять текущую реализацию инпута от нее наследуемся
interface Props extends HTMLInputElementProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: Props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    }: Props = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readonly;

    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    useEffect(() => {
        // чтобы сразу был фокус на инпуnе который задан autofocus
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
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
        <div className={classNames(styles.InputWrapper, mods, [className])}>
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
                    readOnly={readonly}
                    {...otherProps}
                />
                {isCaretVisible && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                )}
            </div>
        </div>
    );
});

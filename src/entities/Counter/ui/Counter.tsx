import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import style from './Counter.module.scss';
import { counterActions } from '../model/slice/counterSlice';

interface Props {
    className?: string;
}

export const Counter: FC<Props> = ({ className }: Props) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames(style.Container, {}, [className])}>
            <h1>
                value =
                {' '}
                {counterValue}
                {}
            </h1>
            <Button onClick={increment}>
                increment
            </Button>
            <Button onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};

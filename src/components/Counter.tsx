import React, {useState} from 'react';
import styles from './Counter.modules.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={styles.button}>increment</button>
        </div>
    );
};

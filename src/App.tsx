import React from 'react';
import { Counter } from "./components/Counter";
import './index.scss';

export const App = () => {
    return (
        <div className="app">
            Hello Mr. Fakhri
            <Counter />
        </div>
    );
};

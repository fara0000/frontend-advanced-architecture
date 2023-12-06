import React, {Suspense, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О приложениe</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainAsync />} />
                    <Route path="/about" element={<AboutAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;


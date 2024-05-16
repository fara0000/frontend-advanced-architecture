import React, { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/Router';
import { Navbar, Sidebar } from 'widgets';
import { userActions } from 'entities/User';
import { useDispatch } from 'react-redux';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    // имитация refresh токена если есть в LS то авторизуем при открытии вкладки
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

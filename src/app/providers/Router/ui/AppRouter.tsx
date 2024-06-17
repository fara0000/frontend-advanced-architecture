import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'app/providers/Router/lib/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);

    // разделяем роуты для авторизированных и неавторизированных
    const routesFiltered = useMemo(() => routes.filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Routes>
            {routesFiltered.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
});

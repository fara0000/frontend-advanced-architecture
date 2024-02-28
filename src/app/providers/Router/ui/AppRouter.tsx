import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'app/providers/Router/lib/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

export const AppRouter = () => (
    <Routes>
        {routes.map((route) => (
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

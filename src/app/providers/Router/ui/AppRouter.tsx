import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "app/providers/Router/lib/routeConfig";

export const AppRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route) => <Route
                    key={route.path}
                    path={route.path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        </Suspense>
                    )}
                />)}
            </Routes>
        </Suspense>
    );
};

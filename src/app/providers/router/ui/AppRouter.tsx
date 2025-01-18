import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/ config/routeConfig/routeConfig";

export const AppRouter: React.FC = () => {

    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className={"page-wrapper"}>
                            {element}
                        </div>
                    )}
                />
            ))}
        </Routes>
    );
};

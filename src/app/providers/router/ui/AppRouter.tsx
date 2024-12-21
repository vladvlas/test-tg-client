import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/ config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

export const AppRouter: React.FC = () => {
    const userData = useSelector(getUserAuthData);

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

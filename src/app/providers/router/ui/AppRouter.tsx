import React from "react";
import { Route, Routes } from "react-router-dom";
import { employeeRouteConfig, routeConfig } from "shared/ config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { UserRole } from "shared/enums/userRole";

export const AppRouter: React.FC = () => {
    const userData = useSelector(getUserAuthData);

    return (
        userData && userData.userRole === UserRole.STUDENT ? (
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
        ) : userData && userData.userRole === UserRole.EMPLOYEE ? (
            <Routes>
                {Object.values(employeeRouteConfig).map(({ path, element }) => (
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
        ) : (
            <Routes>
                {Object.values(routeConfig).filter((route) => route.path === "/authorization").map(({ path, element }) => (
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
        )
    );
};

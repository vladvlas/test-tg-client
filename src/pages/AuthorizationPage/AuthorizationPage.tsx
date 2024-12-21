import React from "react";
import { LoginForm } from "features/AuthByUserName";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { UserRole } from "shared/enums/userRole";

export const AuthorizationPage: React.FC = () => {
    const userData = useSelector(getUserAuthData);

    // if (userData && userData.userRole === UserRole.STUDENT) {
    //     return <Navigate to={"/profile"} />;
    // }
    //
    // if (userData && userData.userRole === UserRole.EMPLOYEE) {
    //     return <Navigate to={"/employee-profile"} />;
    // }

    return (
        <div>
            <Navigate to={"/profile"} />
        </div>
    )
};

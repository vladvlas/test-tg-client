import React from "react";
import { Navigate } from "react-router-dom";

export const AuthorizationPage: React.FC = () => {
    return (
        <div>
            <Navigate to={"/profile"} />
        </div>
    );
};

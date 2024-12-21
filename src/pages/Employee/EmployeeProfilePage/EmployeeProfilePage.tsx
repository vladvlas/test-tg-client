import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { EmployeeProfileCard } from "entities/EmployeeProfile";
import styles from "./EmployeeProfilePage.module.scss";

export const EmployeeProfilePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <EmployeeProfileCard />
        </div>
    );
};

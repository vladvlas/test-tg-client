import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { AdvisersTable } from "entities/AdviserRecord";
import styles from "./AdvisersBasePage.module.scss";

export const AdvisersBasePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <AdvisersTable />
        </div>
    );
};

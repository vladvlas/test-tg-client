import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { AspirantsTable } from "entities/AspirantRecord";
import styles from "./AspirantsBasePage.module.scss";

export const AspirantsBasePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <AspirantsTable />
        </div>
    );
};

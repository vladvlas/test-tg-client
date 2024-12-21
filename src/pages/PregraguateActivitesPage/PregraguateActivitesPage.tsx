import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import styles from "./PregraguateActivitesPage.module.scss";

export const PregraguateActivitesPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            {"PregraguateActivitesPage"}
        </div>
    );
};

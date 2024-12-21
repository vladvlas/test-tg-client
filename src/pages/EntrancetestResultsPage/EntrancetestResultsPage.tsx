import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { EntranceTestList } from "entities/EntranceTests";
import styles from "./EntrancetestResultsPage.module.scss";

export const EntrancetestResultsPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <EntranceTestList />
        </div>
    );
};

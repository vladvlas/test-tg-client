import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { DissertationCard } from "entities/DissertationFile";
import styles from "./DefenseDissertationPage.module.scss";

export const DefenseDissertationPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <DissertationCard />
        </div>
    );
};

import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { AdviserProfile } from "entities/Adviser";
import styles from "./AdviserPage.module.scss";

export const AdviserPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    if (!isAuth) {
        return <Navigate to={"/authorization"} />;
    }

    return (
        <div className={styles.container}>
            <AdviserProfile />
        </div>
    );
};

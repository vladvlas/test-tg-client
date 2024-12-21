import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { CertificationList } from "entities/Certification";
import styles from "./CertificationPage.module.scss";

export const CertificationPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <CertificationList />
        </div>
    );
};

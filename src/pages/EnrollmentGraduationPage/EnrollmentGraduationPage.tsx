import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import styles from "./EnrollmentGraduationPage.module.scss";

export const EnrollmentGraduationPage: React.FC = () => {
    const isAuth = Boolean(useSelector(getUserAuthData));

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            {"EnrollmentGraduationPage"}
        </div>
    );
};

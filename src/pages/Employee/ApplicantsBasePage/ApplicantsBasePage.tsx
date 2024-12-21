import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { ApplicantsTable } from "entities/ApplicantRecord";
import styles from "./ApplicantsBasePage.module.scss";

export const ApplicantsBasePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <ApplicantsTable />
        </div>
    );
};

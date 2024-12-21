import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { DoctorantsTable } from "entities/DoctorantRecord";
import styles from "./DoctorantsBasePage.module.scss";

export const DoctorantsBasePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <DoctorantsTable />
        </div>
    );
};

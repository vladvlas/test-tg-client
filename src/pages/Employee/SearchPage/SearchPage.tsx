import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import styles from "./SearchPage.module.scss";

export const SearchPage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            {/* <ProfileCard /> */}
            {"Поиск"}
        </div>
    );
};

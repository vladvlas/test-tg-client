import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { OrderCertificatesTable } from "entities/OrderCertificateRecord";
import styles from "./MagazineCertificatesPage.module.scss";

export const MagazineCertificatesPage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <OrderCertificatesTable />
        </div>
    );
};

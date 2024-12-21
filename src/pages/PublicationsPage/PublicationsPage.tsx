import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { Button } from "antd";
import { AddPublicationModal } from "features/AddPublication";
import { PublicationList } from "entities/Publication/model/ui/PublicationList/PublicationList";
import styles from "./PublicationsPage.module.scss";

export const PublicationsPage: React.FC = () => {
    const [open, setOpen] = useState(false);
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <PublicationList />
            <div className={styles.button} onClick={openModal}><Button type={"primary"}>{"Добавить"}</Button></div>
            {
                open ? (
                    <AddPublicationModal
                        open={open}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                ) : null
            }
        </div>
    );
};

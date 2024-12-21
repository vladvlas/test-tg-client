import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { GrantList } from "entities/Grant";
import { Button } from "antd";
import { AddGrantModal } from "features/AddGrant";
import styles from "./GrantsPage.module.scss";

export const GrantsPage: React.FC = () => {
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
            <GrantList />
            <div className={styles.button} onClick={openModal}><Button type={"primary"}>{"Добавить"}</Button></div>
            {
                open ? (
                    <AddGrantModal
                        open={open}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                ) : null
            }
        </div>
    );
};

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { ConferenceList } from "entities/Conference/ui/ConferenceList/ConferenceList";
import { Button } from "antd";
import { AddConferenceModal } from "features/AddConference";
import styles from "./ConferencesPage.module.scss";

export const ConferencesPage: React.FC = () => {
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
            <ConferenceList />
            <div className={styles.button} onClick={openModal}>
                <Button type={"primary"}>
                    {"Добавить"}
                </Button>
            </div>
            {
                open ? (
                    <AddConferenceModal
                        open={open}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                ) : null
            }
        </div>
    );
};

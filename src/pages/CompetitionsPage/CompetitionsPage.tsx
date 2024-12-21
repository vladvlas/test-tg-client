import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { CompetitionList } from "entities/Competition";
import { Button } from "antd";
import { AddCompetitionModal } from "features/AddCompetition";
import styles from "./CompetitionsPage.module.scss";

export const CompetitionsPage: React.FC = () => {
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
            <CompetitionList />
            <div className={styles.button} onClick={openModal}><Button type={"primary"}>{"Добавить"}</Button></div>
            {
                open ? (
                    <AddCompetitionModal
                        open={open}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                ) : null
            }
        </div>
    );
};

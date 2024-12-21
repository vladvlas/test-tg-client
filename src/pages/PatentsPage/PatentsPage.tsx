import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { PatentList } from "entities/Patent/model/ui/PatentList/PatentList";
import { Button } from "antd";
import { AddPatentModal } from "features/AddPatent";
import styles from "./PatentsPage.module.scss";

export const PatentsPage: React.FC = () => {
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
            <PatentList />
            <div className={styles.button} onClick={openModal}><Button type={"primary"}>{"Добавить"}</Button></div>
            {
                open ? (
                    <AddPatentModal
                        open={open}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                    />
                ) : null
            }
        </div>
    );
};

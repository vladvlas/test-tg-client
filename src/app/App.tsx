import React, { useCallback, useEffect, useState } from "react";
import "./styles/index.scss";
import { Header } from "widgest/Header";
import { Sidebar } from "widgest/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Button } from "antd";
import { OrderCertificateModal } from "features/OrderCertificate";
import { AppRouter } from "app/providers/router";
import { UserRole } from "shared/enums/userRole";
import { Navigate } from "react-router-dom";
import styles from "./App.module.scss";

export const App = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const showModal = () => {
        setOpenModal(true);
    };

    const handleOk = () => {
        setOpenModal(false);
    };

    const handleCancel = () => {
        setOpenModal(false);
    };

    const authData = useSelector(getUserAuthData);

    useEffect(() => {
        document.title = "Цифровая аспирантура";
    }, []);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={"app"}>
            <Header>
                <p className={styles.logo}>{"Цифровая аспирантура"}</p>
                <div className={styles.main}>
                    {
                        authData && authData.userRole === UserRole.STUDENT
                            ? <Button className={styles.button} onClick={showModal}>{"Заказать справку"}</Button>
                            : null
                    }
                    {
                        authData && authData.username ? <div className={styles.username}>{authData.username}</div> : null
                    }
                    {
                        authData ? <Button className={"btn-red"} onClick={onLogout}>{"Выйти"}</Button> : null
                    }
                    {
                        authData && authData.userRole === UserRole.STUDENT && openModal ? (
                            <OrderCertificateModal
                                open={openModal}
                                handleOk={handleOk}
                                handleCancel={handleCancel}
                            />
                        ) : null
                    }
                </div>
            </Header>
            <div className={"content-page"}>
                <Sidebar />
                <AppRouter />
                {/*{*/}
                {/*    !authData ? (*/}
                {/*        <Navigate to={"/authorization"} />*/}
                {/*    )*/}
                {/*        : null*/}
                {/*}*/}
            </div>
        </div>
    );
};

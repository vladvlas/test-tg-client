import React from "react";
import "./styles/index.scss";
import { Header } from "widgest/Header";
import { Sidebar } from "widgest/Sidebar";
import { AppRouter } from "app/providers/router";
import styles from "./App.module.scss";

export const App = () => {
    return (
        <div className={"app"}>
            <Header>
                <p className={styles.logo}>{"Цифровая аспирантура"}</p>
                <div className={styles.main}>
                </div>
            </Header>
            <div className={"content-page"}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

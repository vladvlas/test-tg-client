import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { SidebarLink } from "widgest/Sidebar/SidebarLink/SidebarLink";
import { UserRole } from "shared/enums/userRole";
import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <SidebarLink path={"/profile"} title={"Личный кабинет"}/>
                <SidebarLink path={"/adviser"} title={"Руководитель"}/>
                <SidebarLink path={"/entrancetestresults"} title={"Вступительные испытания"}/>
                <SidebarLink path={"/certification"} title={"Аттестация"}/>
                <SidebarLink path={"/publications"} title={"Научные публикации"}/>
                <SidebarLink path={"/conferences"} title={"Научные конференции"}/>
                <SidebarLink path={"/competitions"} title={"Научные конкурсы"}/>
                <SidebarLink path={"/patents"} title={"Патенты"}/>
                <SidebarLink path={"/grants"} title={"Гранты"}/>
                <SidebarLink path={"/defensedissertation"} title={"Защита и диссертация"}/>
            </div>
        </div>
    );
};

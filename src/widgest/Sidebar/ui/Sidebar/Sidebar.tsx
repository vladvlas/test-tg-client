import React from "react";
import { SidebarLink } from "widgest/Sidebar/SidebarLink/SidebarLink";
import styles from "./Sidebar.module.scss";

export const Sidebar: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <SidebarLink path={"/profile"} title={"Личный кабинет"}/>
                <SidebarLink path={"/publications"} title={"Научные публикации"}/>
            </div>
        </div>
    );
};

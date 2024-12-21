import React from "react";

import { Button } from "antd";
import { PublicationList } from "entities/Publication/model/ui/PublicationList/PublicationList";
import styles from "./PublicationsPage.module.scss";

export const PublicationsPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <PublicationList />
            <div className={styles.button}><Button type={"primary"}>{"Добавить"}</Button></div>
        </div>
    );
};

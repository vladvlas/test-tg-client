import React from "react";
import { Button } from "antd";
import styles from "./PublicationCard.module.scss";

interface PublicationCardProps {
    id: string;
    title: string;
    year: string;
    publicationType: string;
    edition: string;
    consultant: string;
    userId: string;

}

export const PublicationCard: React.FC<PublicationCardProps> = (props) => {
    const {
        id, title, year, publicationType, edition, consultant, userId,
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Название"}</p>
                <p className={styles.description}>{title}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Год: "}</p>
                <p className={styles.description}>{year}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Тип статьи: "}</p>
                <p className={styles.description}>{publicationType}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Издание: "}</p>
                <p className={styles.description}>{edition}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Консультант: "}</p>
                <p className={styles.description}>{consultant}</p>
            </div>
            <div />
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"}>{"Изменить"}</Button>
                <Button type={"primary"} className={"btn-red"}>{"Удалить"}</Button>
            </div>
        </div>
    );
};

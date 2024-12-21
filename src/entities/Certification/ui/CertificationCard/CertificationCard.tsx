import React from "react";
import { Certification } from "entities/Certification";
import styles from "./CertificationCard.module.scss";

interface ConferenceCardProps extends Certification {
    userId: string;

}

export const CertificationCard: React.FC<ConferenceCardProps> = (props) => {
    const {
        id, semester, result, userId,
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Семестр: "}</p>
                <p className={styles.description}>{semester}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Результат: "}</p>
                <p className={styles.description}>{result ? "Аттестация" : "Не аттестация"}</p>
            </div>
        </div>
    );
};

import React from "react";
import { Device } from "entities/Device";
import styles from "./DeviceCard.module.scss";

interface DeviceProps extends Device {
}

export const DeviceCard: React.FC<DeviceProps> = (props) => {
    const {
        id, name, tariff, status,
    } = props;

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.info}>{tariff}</p>
            <div className={styles.indicator} />
        </div>
    );
};
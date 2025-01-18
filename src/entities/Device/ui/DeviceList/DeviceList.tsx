import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDevicesData } from "entities/Device/model/selectors/getDevicesData";
import { getDevicesIsLoading } from "entities/Device/model/selectors/getDevicesIsLoading";
import { getDevicesError } from "entities/Device/model/selectors/getDevicesError";
import { DeviceCard } from "entities/Device";
import styles from "./DeviceList.module.scss";
import PlusIcon from "../../../../shared/assets/images/plus.svg";

export const DeviceList: React.FC = () => {
    const data = useSelector(getDevicesData);
    const isLoading = useSelector(getDevicesIsLoading);
    const error = useSelector(getDevicesError);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <button className={styles.button}>
                <PlusIcon />
            </button>
            {
                data.map((item) => (
                    <DeviceCard key={item.id} id={item.id} name={item.name} tariff={item.tariff} status={item.status}/>
                ))
            }
        </div>
    );
};
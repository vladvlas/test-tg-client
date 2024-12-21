import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { Button, Select } from "antd";
import { saveAs } from "file-saver";
import styles from "./ReportsPage.module.scss";

export const ReportsPage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const isAuth = Boolean(userAuthData);
    const [report, setReport] = useState<string>("Не выбрано");

    const fileContent = [report];

    const downloadReport = () => {
        saveAs(new Blob(fileContent, { type: "text/plain;charset=utf-8" }), `${report}.doc`);
    };

    const handleChange = (value: string) => {
        setReport(value);
    };

    useEffect(() => {
        setReport("Не выбрано");
    }, []);

    // if (!isAuth) {
    //     return <Navigate to={"/authorization"} />;
    // }

    return (
        <div className={styles.container}>
            <Select
                defaultValue={report}
                style={{ width: 220 }}
                onChange={handleChange}
                options={[
                    { value: "Тестовый отчет 1", label: "Тестовый отчет 1" },
                    { value: "Тестовый отчет 2", label: "Тестовый отчет 2" },
                    { value: "Тестовый отчет 3", label: "Тестовый отчет 3" },
                    { value: "Не выбрано", label: "Не выбрано", disabled: true },
                ]}
            />
            {
                report !== "Не выбрано" ? (
                    <Button onClick={downloadReport}>{"Скачать отчет"}</Button>
                ) : null
            }
        </div>
    );
};

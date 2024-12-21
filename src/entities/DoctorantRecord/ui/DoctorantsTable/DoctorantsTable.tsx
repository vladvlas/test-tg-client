import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table } from "antd";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { fetchDoctorants } from "entities/DoctorantRecord/model/services/fetchDoctorants";
import { getDoctorantRecordsData } from "entities/DoctorantRecord/model/selectors/getDoctorantRecordsData";
import { getDoctorantRecordsIsLoading } from "entities/DoctorantRecord/model/selectors/getDoctorantRecordsIsLoading";
import { getDoctorantRecordsError } from "entities/DoctorantRecord/model/selectors/getDoctorantRecordsError";
import styles from "./DoctorantsTable.module.scss";

export const DoctorantsTable: React.FC = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>("");

    const data = useSelector(getDoctorantRecordsData);
    const isLoading = useSelector(getDoctorantRecordsIsLoading);
    const error = useSelector(getDoctorantRecordsError);

    const dataWithKeys = data.map((record) => ({ ...record, key: record.id }));

    useEffect(() => {
        dispatch(fetchDoctorants(searchString));
    }, [dispatch]);

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при получении базы докторантов", "error");
        }
    }, [error]);

    const onSearchStringChange = (value: string) => {
        setSearchString(value);
    };

    const onSearchClick = () => {
        dispatch(fetchDoctorants(searchString));
    };

    const columns = [
        {
            title: "Фамилия",
            dataIndex: "surname",
            key: "surname",
        },
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Отчество",
            dataIndex: "patronymic",
            key: "patronymic",
        },
        {
            title: "Факультет",
            dataIndex: "faculty",
            key: "faculty",
        },
        {
            title: "Кафедра",
            dataIndex: "department",
            key: "department",
        },
    ];

    return (
        <div className={styles.container}>
            {contextHolder}
            <Input.Search value={searchString} onChange={(value) => onSearchStringChange(value.target.value)} onSearch={onSearchClick} />
            <Table columns={columns} dataSource={dataWithKeys} loading={isLoading} />
        </div>
    );
};

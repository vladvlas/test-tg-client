import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table } from "antd";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { fetchAdvisers } from "entities/AdviserRecord/model/services/fetchAdvisers";
import { getAdviserRecordsData } from "entities/AdviserRecord/model/selectors/getAdviserRecordsData";
import { getAdviserRecordsIsLoading } from "entities/AdviserRecord/model/selectors/getAdviserRecordsIsLoading";
import { getAdviserRecordsError } from "entities/AdviserRecord/model/selectors/getAdviserRecordsError";
import styles from "./AdvisersTable.module.scss";

export const AdvisersTable: React.FC = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>("");

    const data = useSelector(getAdviserRecordsData);
    const isLoading = useSelector(getAdviserRecordsIsLoading);
    const error = useSelector(getAdviserRecordsError);

    const dataWithKeys = data.map((record) => ({ ...record, key: record.id }));

    useEffect(() => {
        dispatch(fetchAdvisers(searchString));
    }, [dispatch]);

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при получении базы научных руководителей", "error");
        }
    }, [error]);

    const onSearchStringChange = (value: string) => {
        setSearchString(value);
    };

    const onSearchClick = () => {
        dispatch(fetchAdvisers(searchString));
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
        {
            title: "Ученая степень",
            dataIndex: "academicDegree",
            key: "academicDegree",
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

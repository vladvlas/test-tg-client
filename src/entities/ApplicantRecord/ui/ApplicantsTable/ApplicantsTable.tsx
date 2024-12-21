import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Table } from "antd";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { fetchApplicants } from "entities/ApplicantRecord/model/services/fetchApplicants";
import { getApplicantsRecordsData } from "entities/ApplicantRecord/model/selectors/getApplicantsRecordsData";
import { getApplicantsRecordsIsLoading } from "entities/ApplicantRecord/model/selectors/getApplicantsRecordsIsLoading";
import { getApplicantsRecordsError } from "entities/ApplicantRecord/model/selectors/getApplicantsRecordsError";
import styles from "./ApplicantsTable.module.scss";

export const ApplicantsTable: React.FC = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>("");

    const data = useSelector(getApplicantsRecordsData);
    const isLoading = useSelector(getApplicantsRecordsIsLoading);
    const error = useSelector(getApplicantsRecordsError);

    const dataWithKeys = data.map((record) => ({ ...record, key: record.id }));

    useEffect(() => {
        dispatch(fetchApplicants(searchString));
    }, [dispatch]);

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при получении базы соискателей", "error");
        }
    }, [error]);

    const onSearchStringChange = (value: string) => {
        setSearchString(value);
    };

    const onSearchClick = () => {
        dispatch(fetchApplicants(searchString));
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

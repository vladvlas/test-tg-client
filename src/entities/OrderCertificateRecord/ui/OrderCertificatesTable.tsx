import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchOrderCertificateRecords,
} from "entities/OrderCertificateRecord/model/services/fetchOrderCertificateRecords";
import { Button, Table } from "antd";
import { getCertificateRecordsData } from "entities/OrderCertificateRecord/model/selectors/getCertificateRecordsData";
import {
    getOrderCertificateRecordIsLoading,
} from "entities/OrderCertificateRecord/model/selectors/getOrderCertificateRecordIsLoading";
import {
    getOrderCertificateRecordError,
} from "entities/OrderCertificateRecord/model/selectors/getOrderCertificateRecordError";
import { Stub } from "widgest/Stub";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { issueCertificate } from "entities/OrderCertificateRecord/model/services/isuueCerticate";
import {
    getOrderCertificateRecordSuccess,
} from "entities/OrderCertificateRecord/model/selectors/getOrderCertificateRecordSuccess";
import {
    getOrderCertificateRecordIssueError,
} from "entities/OrderCertificateRecord/model/selectors/getOrderCertificateRecordIssueError";
import {
    getOrderCertificateRecordIsIssueLoading,
} from "entities/OrderCertificateRecord/model/selectors/getOrderCertificateRecordIsIssueLoading";
import styles from "./OrderCertificatesTable.module.scss";

export const OrderCertificatesTable: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getCertificateRecordsData);
    const isLoading = useSelector(getOrderCertificateRecordIsLoading);
    const error = useSelector(getOrderCertificateRecordError);
    const isIssueLoading = useSelector(getOrderCertificateRecordIsIssueLoading);
    const issueError = useSelector(getOrderCertificateRecordIssueError);
    const success = useSelector(getOrderCertificateRecordSuccess);

    const showStab = data.length === 0;

    const issueOnClick = (id: string) => {
        dispatch(issueCertificate(id));
    };

    const dataWithKeys = data.map(((record) => (
        { ...record, key: record.id, action: <Button onClick={() => issueOnClick(record.id)}>{"Выдать"}</Button> }
    )));

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        dispatch(fetchOrderCertificateRecords(""));
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при получении журнала", "error");
        }
    }, [error]);

    useEffect(() => {
        if (issueError) {
            openNotification("Ошибка", "Ошибка при выдаче справки", "error");
        }
    }, [issueError]);

    useEffect(() => {
        if (success) {
            openNotification("Успех", "Справка выдана", "success");
            dispatch(fetchOrderCertificateRecords(""));
        }
    }, [success]);

    const columns = [
        {
            title: "№ п/п",
            dataIndex: "number",
            key: "number",
        },
        {
            title: "Имя",
            dataIndex: "userName",
            key: "userName",
        },
        {
            title: "Дата подачи",
            dataIndex: "applicationDate",
            key: "applicationDate",
        },
        {
            title: "Гербовая печать",
            dataIndex: "needOfficialSeal",
            key: "needOfficialSeal",
        },
        {
            title: "Место требования",
            dataIndex: "spaceRequirement",
            key: "spaceRequirement",
        },
        {
            title: "Количество",
            dataIndex: "count",
            key: "count",
        },
        {
            title: "Действие",
            dataIndex: "action",
            key: "action",
        },
    ];

    return (
        <div className={styles.container}>
            {contextHolder}
            <Table loading={isLoading || isIssueLoading} dataSource={dataWithKeys} columns={columns} />
        </div>
    );
};

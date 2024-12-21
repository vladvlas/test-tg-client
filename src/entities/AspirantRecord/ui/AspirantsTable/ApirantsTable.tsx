import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAspirantRecordsData } from "entities/AspirantRecord/model/selectors/getAspirantRecordsData";
import { getAspirantRecordsError } from "entities/AspirantRecord/model/selectors/getAspirantRecordsError";
import { getAspirantRecordsIsLoading } from "entities/AspirantRecord/model/selectors/getAspirantRecordsIsLoading";
import { Input, Modal, Table } from "antd";
import { fetchAspirants } from "entities/AspirantRecord/model/services/fetchAspirants";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./AspirantsTable.module.scss";
import { AspirantRecord } from "entities/AspirantRecord";

export const AspirantsTable: React.FC = () => {
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState<string>("");
    const [openModal, setOpenModal] = useState(false);
    const [aspirant, setAspirant] = useState<AspirantRecord>(null);

    const showModal = (record: AspirantRecord) => {
        setAspirant(record);
        setOpenModal(true);
    };

    const data = useSelector(getAspirantRecordsData);
    const isLoading = useSelector(getAspirantRecordsIsLoading);
    const error = useSelector(getAspirantRecordsError);

    const dataWithKeys = data.map((record) => ({
        ...record,
        key: record.id,
        name: <div className={styles.row} onClick={() => showModal(record)}>{record.name}</div>,
        surname: <div className={styles.row} onClick={() => showModal(record)}>{record.surname}</div>,
        patronymic: <div className={styles.row} onClick={() => showModal(record)}>{record.patronymic}</div>,
    }));

    useEffect(() => {
        dispatch(fetchAspirants(searchString));
    }, [dispatch]);

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при получении базы аспирантов", "error");
        }
    }, [error]);

    const onSearchStringChange = (value: string) => {
        setSearchString(value);
    };

    const onSearchClick = () => {
        dispatch(fetchAspirants(searchString));
    };

    const columns = [
        {
            title: "Группа",
            dataIndex: "groupNumber",
            key: "groupNumber",
        },
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
            title: "Курс",
            dataIndex: "class",
            key: "class",
        },
    ];

    return (
        <div className={styles.container}>
            {contextHolder}
            <Input.Search value={searchString} onChange={(value) => onSearchStringChange(value.target.value)} onSearch={onSearchClick} />
            <Table columns={columns} dataSource={dataWithKeys} loading={isLoading} />
            {
                aspirant ? (
                    <Modal
                        okText={"Ok"}
                        cancelText={"Отмена"}
                        onOk={() => setOpenModal(false)}
                        onCancel={() => setOpenModal(false)}
                        open={openModal}
                        width={1000}
                        confirmLoading={isLoading}
                    >
                        <div className={styles.content}>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Фамилия: "}</p>
                                <p className={styles.descr}>{aspirant.surname}</p>
                            </div>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Имя: "}</p>
                                <p className={styles.descr}>{aspirant.name}</p>
                            </div>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Отчество: "}</p>
                                <p className={styles.descr}>{aspirant.patronymic}</p>
                            </div>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Факультет: "}</p>
                                <p className={styles.descr}>{aspirant.faculty}</p>
                            </div>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Кафедра: "}</p>
                                <p className={styles.descr}>{aspirant.department}</p>
                            </div>
                            <div className={styles.record}>
                                <p className={styles.title}>{"Группа: "}</p>
                                <p className={styles.descr}>{aspirant.groupNumber}</p>
                            </div>
                        </div>
                    </Modal>
                ) : null
            }
        </div>
    );
};

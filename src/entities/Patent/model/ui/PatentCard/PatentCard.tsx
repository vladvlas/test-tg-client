import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import {
    getDeletingPublicationIsLoading,
} from "entities/Publication/model/selectors/getDeletingPublicationIsLoading";
import {
    getDeletingPublicationError,
} from "entities/Publication/model/selectors/getDeletingPublicationError";
import { fetchPatents, Patent } from "entities/Patent";
import { deletePatent } from "entities/Patent/model/services/deletePatent";
import { PatentEditingModal } from "features/EditPatent";
import { ConfirmDeleteItemModal } from "features/ConfirmDeleteItemModal/ConfirmDeleteItemModal";
import { getDeletingPatentSuccess } from "entities/Patent/model/selectors/getDeletingPatentSuccess";
import styles from "./PatentCard.module.scss";

interface PatentCardProps extends Patent{
    userId: string;

}

export const PatentCard: React.FC<PatentCardProps> = (props) => {
    const {
        id, title, date, userId,
    } = props;
    const [isOpenEditPatentModal, setIsOpenEditPatentModal] = useState<boolean>(false);
    const [isOpenDeletePatentModal, setIsOpenDeletePatentModal] = useState<boolean>(false);

    const isDeletingLoading = useSelector(getDeletingPublicationIsLoading);
    const deletingError = useSelector(getDeletingPublicationError);
    const deletingSuccess = useSelector(getDeletingPatentSuccess);

    const openEditPatentModal = () => {
        setIsOpenEditPatentModal(!isOpenEditPatentModal);
    };

    const handleOkEditPatentModal = () => {
        setIsOpenEditPatentModal(false);
    };

    const handleCancelEditPatentModal = () => {
        setIsOpenEditPatentModal(false);
    };

    const openDeletePatentModal = () => {
        setIsOpenDeletePatentModal(!isOpenEditPatentModal);
    };

    const handleOkDeletePatentModal = () => {
        setIsOpenDeletePatentModal(false);
    };

    const handleCancelDeletePatentModal = () => {
        setIsOpenDeletePatentModal(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Название"}</p>
                <p className={styles.description}>{title}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Дата выдачи: "}</p>
                <p className={styles.description}>{date}</p>
            </div>
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"} onClick={openEditPatentModal}>{"Изменить"}</Button>
                <Button type={"primary"} onClick={openDeletePatentModal} className={"btn-red"}>{"Удалить"}</Button>
            </div>
            {
                isOpenEditPatentModal ? (
                    <PatentEditingModal
                        id={id}
                        title={title}
                        date={date}
                        open={isOpenEditPatentModal}
                        handleOk={handleOkEditPatentModal}
                        handleCancel={handleCancelEditPatentModal}
                    />
                ) : null
            }
            {
                isOpenDeletePatentModal ? (
                    <ConfirmDeleteItemModal
                        id={id}
                        open={isOpenDeletePatentModal}
                        handleOk={handleOkDeletePatentModal}
                        handleCancel={handleCancelDeletePatentModal}
                        userId={userId}
                        handleConfirmDelete={deletePatent}
                        refreshFunction={fetchPatents}
                        modalText={"Вы действительно хотите удалить публикацию?"}
                        isLoading={isDeletingLoading}
                        error={deletingError}
                        success={deletingSuccess}
                    />
                ) : null
            }
        </div>
    );
};

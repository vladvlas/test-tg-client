import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { ConfirmDeleteItemModal } from "features/ConfirmDeleteItemModal/ConfirmDeleteItemModal";
import { Conference, fetchConferences } from "entities/Conference";
import { getDeletingConferenceIsLoading } from "entities/Conference/model/selectors/getDeletingConferenceIsLoading";
import { getDeletingConferenceError } from "entities/Conference/model/selectors/getDeletingConferenceError";
import { ConferenceEditingModal } from "features/EditConference";
import { deleteConference } from "entities/Conference/model/services/deleteConference";
import { getDeletingConferenceSuccess } from "entities/Conference/model/selectors/getDeletingConferenceSuccess";
import styles from "./ConferenceCard.module.scss";

interface ConferenceCardProps extends Conference{
    userId: string;

}

export const ConferenceCard: React.FC<ConferenceCardProps> = (props) => {
    const {
        id, title, year, level, participationOption, isWin, userId,
    } = props;
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    const isDeletingLoading = useSelector(getDeletingConferenceIsLoading);
    const deletingError = useSelector(getDeletingConferenceError);
    const deletingSuccess = useSelector(getDeletingConferenceSuccess);

    const openEditModal = () => {
        setIsOpenEditModal(!isOpenEditModal);
    };

    const handleOkEditPModal = () => {
        setIsOpenEditModal(false);
    };

    const handleCancelEditModal = () => {
        setIsOpenEditModal(false);
    };

    const openDeleteModal = () => {
        setIsOpenDeleteModal(!isOpenEditModal);
    };

    const handleOkDeleteModal = () => {
        setIsOpenDeleteModal(false);
    };

    const handleCancelDeleteModal = () => {
        setIsOpenDeleteModal(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Название: "}</p>
                <p className={styles.description}>{title}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Год: "}</p>
                <p className={styles.description}>{year}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Масштаб:: "}</p>
                <p className={styles.description}>{level}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Вариант участия: "}</p>
                <p className={styles.description}>{participationOption}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Победитель: "}</p>
                <p className={styles.description}>{isWin ? "Да" : "Нет"}</p>
            </div>
            <div />
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"} onClick={openEditModal}>{"Изменить"}</Button>
                <Button type={"primary"} onClick={openDeleteModal} className={"btn-red"}>{"Удалить"}</Button>
            </div>
            <ConferenceEditingModal
                id={id}
                title={title}
                year={year}
                participationOption={participationOption}
                level={level}
                isWin={isWin}
                open={isOpenEditModal}
                handleOk={handleOkEditPModal}
                handleCancel={handleCancelEditModal}
            />
            <ConfirmDeleteItemModal
                id={id}
                open={isOpenDeleteModal}
                handleOk={handleOkDeleteModal}
                handleCancel={handleCancelDeleteModal}
                userId={userId}
                handleConfirmDelete={deleteConference}
                refreshFunction={fetchConferences}
                modalText={"Вы действительно хотите удалить конференцию?"}
                isLoading={isDeletingLoading}
                error={deletingError}
                success={deletingSuccess}
            />
        </div>
    );
};

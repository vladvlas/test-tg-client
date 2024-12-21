import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { ConfirmDeleteItemModal } from "features/ConfirmDeleteItemModal/ConfirmDeleteItemModal";
import { Competition, fetchCompetitions } from "entities/Competition";
import { getDeletingCompetitionsIsLoading } from "entities/Competition/model/selectors/getDeletingCompetitionsIsLoading";
import { getDeletingCompetitionsError } from "entities/Competition/model/selectors/getDeletingCompetitionsError";
import { deleteCompetition } from "entities/Competition/model/services/deleteConference";
import { CompetitionEditingModal } from "features/EditCompetition";
import { getDeletingCompetitionsSuccess } from "entities/Competition/model/selectors/getDeletingCompetitionsSuccess";
import styles from "./CompetitionCard.module.scss";

interface CompetitionCardProps extends Competition{
    userId: string;

}

export const CompetitionCard: React.FC<CompetitionCardProps> = (props) => {
    const {
        id, title, year, result, userId,
    } = props;
    const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

    const isDeletingLoading = useSelector(getDeletingCompetitionsIsLoading);
    const deletingError = useSelector(getDeletingCompetitionsError);
    const deletingSuccess = useSelector(getDeletingCompetitionsSuccess);

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
                <p className={styles.title}>{"Результат: "}</p>
                <p className={styles.description}>{result}</p>
            </div>
            <div />
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"} onClick={openEditModal}>{"Изменить"}</Button>
                <Button type={"primary"} onClick={openDeleteModal} className={"btn-red"}>{"Удалить"}</Button>
            </div>
            {
                isOpenDeleteModal ? (
                    <CompetitionEditingModal
                        id={id}
                        title={title}
                        year={year}
                        result={result}
                        open={isOpenEditModal}
                        handleOk={handleOkEditPModal}
                        handleCancel={handleCancelEditModal}
                    />
                ) : null
            }
            {
                isOpenDeleteModal ? (
                    <ConfirmDeleteItemModal
                        id={id}
                        open={isOpenDeleteModal}
                        handleOk={handleOkDeleteModal}
                        handleCancel={handleCancelDeleteModal}
                        userId={userId}
                        handleConfirmDelete={deleteCompetition}
                        refreshFunction={fetchCompetitions}
                        modalText={"Вы действительно хотите удалить конкурс?"}
                        isLoading={isDeletingLoading}
                        error={deletingError}
                        success={deletingSuccess}
                    />
                ) : null
            }
        </div>
    );
};

import React, { useState } from "react";
import { Button } from "antd";
import { PublicationEditingModal } from "features/EditPublication";
import { deletePublication } from "entities/Publication/model/services/deletePublication";
import { useSelector } from "react-redux";
import {
    getDeletingPublicationIsLoading,
} from "entities/Publication/model/selectors/getDeletingPublicationIsLoading";
import {
    getDeletingPublicationError,
} from "entities/Publication/model/selectors/getDeletingPublicationError";
import { fetchPublications } from "entities/Publication";
import { ConfirmDeleteItemModal } from "features/ConfirmDeleteItemModal/ConfirmDeleteItemModal";
import { getDeletingPublicationSuccess } from "entities/Publication/model/selectors/getDeletingPublicationSuccess";
import styles from "./PublicationCard.module.scss";

interface PublicationCardProps {
    id: string;
    title: string;
    year: string;
    publicationType: string;
    edition: string;
    consultant: string;
    userId: string;

}

export const PublicationCard: React.FC<PublicationCardProps> = (props) => {
    const {
        id, title, year, publicationType, edition, consultant, userId,
    } = props;
    const [isOpenEditPublicationModal, setIsOpenEditPublicationModal] = useState<boolean>(false);
    const [isOpenDeletePublicationModal, setIsOpenDeletePublicationModal] = useState<boolean>(false);

    const isDeletingLoading = useSelector(getDeletingPublicationIsLoading);
    const deletingError = useSelector(getDeletingPublicationError);
    const deletingSuccess = useSelector(getDeletingPublicationSuccess);

    const openEditPublicationModal = () => {
        setIsOpenEditPublicationModal(!isOpenEditPublicationModal);
    };

    const handleOkEditPublicationModal = () => {
        setIsOpenEditPublicationModal(false);
    };

    const handleCancelEditPublicationModal = () => {
        setIsOpenEditPublicationModal(false);
    };

    const openDeletePublicationModal = () => {
        setIsOpenDeletePublicationModal(!isOpenEditPublicationModal);
    };

    const handleOkDeletePublicationModal = () => {
        setIsOpenDeletePublicationModal(false);
    };

    const handleCancelDeletePublicationModal = () => {
        setIsOpenDeletePublicationModal(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Название"}</p>
                <p className={styles.description}>{title}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Год: "}</p>
                <p className={styles.description}>{year}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Тип статьи: "}</p>
                <p className={styles.description}>{publicationType}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Издание: "}</p>
                <p className={styles.description}>{edition}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Консультант: "}</p>
                <p className={styles.description}>{consultant}</p>
            </div>
            <div />
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"} onClick={openEditPublicationModal}>{"Изменить"}</Button>
                <Button type={"primary"} onClick={openDeletePublicationModal} className={"btn-red"}>{"Удалить"}</Button>
            </div>
            {
                isOpenEditPublicationModal ? (
                    <PublicationEditingModal
                        id={id}
                        title={title}
                        year={year}
                        publicationType={publicationType}
                        edition={edition}
                        consultant={consultant}
                        open={isOpenEditPublicationModal}
                        handleOk={handleOkEditPublicationModal}
                        handleCancel={handleCancelEditPublicationModal}
                    />
                ) : null
            }
            {
                isOpenDeletePublicationModal ? (
                    <ConfirmDeleteItemModal
                        id={id}
                        open={isOpenDeletePublicationModal}
                        handleOk={handleOkDeletePublicationModal}
                        handleCancel={handleCancelDeletePublicationModal}
                        userId={userId}
                        handleConfirmDelete={deletePublication}
                        refreshFunction={fetchPublications}
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

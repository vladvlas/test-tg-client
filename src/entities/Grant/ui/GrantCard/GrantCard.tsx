import React, { useState } from "react";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { ConfirmDeleteItemModal } from "features/ConfirmDeleteItemModal/ConfirmDeleteItemModal";
import { getDeletingGrantIsLoading } from "entities/Grant/model/selectors/getDeletingGrantIsLoading";
import { getDeletingGrantError } from "entities/Grant/model/selectors/getDeletingGrantsError";
import { fetchGrants, Grant } from "entities/Grant";
import { deleteGrant } from "entities/Grant/model/services/deleteGrant";
import { GrantEditingModal } from "features/EditGrant";
import { getDeletingGrantsSuccess } from "entities/Grant/model/selectors/getDeletingGrantsSuccess";
import styles from "./GrantCard.module.scss";

interface GrantCardProps extends Grant {
    userId: string;

}

export const GrantCard: React.FC<GrantCardProps> = (props) => {
    const {
        id, title, participation, userId,
    } = props;
    const [isOpenEditGrantModal, setIsOpenEditGrantModal] = useState<boolean>(false);
    const [isOpenDeleteGrantModal, setIsOpenDeleteGrantModal] = useState<boolean>(false);

    const isDeletingLoading = useSelector(getDeletingGrantIsLoading);
    const deletingError = useSelector(getDeletingGrantError);
    const deletingSuccess = useSelector(getDeletingGrantsSuccess);

    const openEditGrantModal = () => {
        setIsOpenEditGrantModal(!isOpenEditGrantModal);
    };

    const handleOkEditGrantModal = () => {
        setIsOpenEditGrantModal(false);
    };

    const handleCancelEditGrantModal = () => {
        setIsOpenEditGrantModal(false);
    };

    const openDeleteGrantModal = () => {
        setIsOpenDeleteGrantModal(!isOpenEditGrantModal);
    };

    const handleOkDeleteGrantModal = () => {
        setIsOpenDeleteGrantModal(false);
    };

    const handleCancelDeleteGrantModal = () => {
        setIsOpenDeleteGrantModal(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.record}>
                <p className={styles.title}>{"Название"}</p>
                <p className={styles.description}>{title}</p>
            </div>
            <div className={styles.record}>
                <p className={styles.title}>{"Участие: "}</p>
                <p className={styles.description}>{participation}</p>
            </div>
            <div className={styles.buttons}>
                <Button type={"primary"} className={"btn-blue"}>{"Скачать"}</Button>
                <Button type={"primary"} onClick={openEditGrantModal}>{"Изменить"}</Button>
                <Button type={"primary"} onClick={openDeleteGrantModal} className={"btn-red"}>{"Удалить"}</Button>
            </div>
            {
                isOpenEditGrantModal ? (
                    <GrantEditingModal
                        id={id}
                        title={title}
                        participation={participation}
                        open={isOpenEditGrantModal}
                        handleOk={handleOkEditGrantModal}
                        handleCancel={handleCancelEditGrantModal}
                    />
                ) : null
            }
            {
                isOpenDeleteGrantModal ? (
                    <ConfirmDeleteItemModal
                        id={id}
                        open={isOpenDeleteGrantModal}
                        handleOk={handleOkDeleteGrantModal}
                        handleCancel={handleCancelDeleteGrantModal}
                        userId={userId}
                        handleConfirmDelete={deleteGrant}
                        refreshFunction={fetchGrants}
                        modalText={"Вы действительно хотите запись о гранте?"}
                        isLoading={isDeletingLoading}
                        error={deletingError}
                        success={deletingSuccess}
                    />
                ) : null
            }
        </div>
    );
};

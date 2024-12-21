import React, { useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { ThunkConfig } from "app/providers/StoreProvider";
import { AsyncThunk } from "@reduxjs/toolkit";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./ConfirmDeleteItemModal.module.scss";

interface DeletingPublicationItemProps<T> {
    id: string;
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleConfirmDelete: AsyncThunk<T, { id: string, userId: string }, ThunkConfig<string>>;
    refreshFunction: AsyncThunk<T, string, ThunkConfig<string>>;
    modalText: string;
    userId: string;
    isLoading: boolean;
    error?: string;
    success?: boolean;
}

export const ConfirmDeleteItemModal: React.FC<DeletingPublicationItemProps<any>> = (props) => {
    const {
        open, handleOk, handleCancel, id, userId, isLoading, modalText, handleConfirmDelete, refreshFunction, error, success
    } = props;
    const dispatch = useDispatch();

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при удалении файла", "error");
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            openNotification("Успешно", "Документ успешно удален", "success");
            dispatch(refreshFunction(userId));
        }
    }, [success]);

    const confirmDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(handleConfirmDelete({ id, userId }));
        handleOk(event);
    };

    return (
        <Modal
            open={open}
            onOk={confirmDelete}
            onCancel={handleCancel}
            width={400}
            okText={"Удалить"}
            cancelText={"Отменить"}
            confirmLoading={isLoading}
        >
            <div className={styles.container}>
                {contextHolder}
                {modalText}
            </div>
        </Modal>
    );
};

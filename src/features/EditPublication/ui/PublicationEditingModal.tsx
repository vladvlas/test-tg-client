import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { fetchPublications, Publication } from "entities/Publication";
import { editingPublicationFileActions as actions } from "features/EditPublication";
import {
    getEditingPublicationTitle,
} from "features/EditPublication/model/selectors/getEditingPublicationTitle";
import {
    getEditingPublicationYear,
} from "features/EditPublication/model/selectors/getEditingPublicationYear";
import {
    getEditingPublicationType,
} from "features/EditPublication/model/selectors/getEditingPublicationType";
import {
    getEditingPublicationEdition,
} from "features/EditPublication/model/selectors/getEditingPublicationEdition";
import { editPublicationFile } from "features/EditPublication/model/services/editPublicationFile";
import {
    getEditingPublicationIsLoading,
} from "features/EditPublication/model/selectors/getEditingPublicationIsLoading";
import {
    getEditingPublicationError,
} from "features/EditPublication/model/selectors/getEditingPublicationError";
import {
    getEditingPublicationConsultant,
} from "features/EditPublication/model/selectors/getEditingPublicationConsultant";
import { getUserAuthData } from "entities/User";
import { UploadFile } from "widgest/UploadFile";
import {
    getEditingPublicationFileContent,
} from "features/EditPublication/model/selectors/getEditingPublicationFileContent";
import { getEditingPublicationFileName } from "features/EditPublication/model/selectors/getEditingPublicationFileName";
import { getEditingPublicationFileSize } from "features/EditPublication/model/selectors/getEditingPublicationFileSize";
import { getEditingPublicationFileType } from "features/EditPublication/model/selectors/getEditingPublicationFileType";
import {
    getEditingPublicationFileLastModification,
} from "features/EditPublication/model/selectors/getEditingPublicationFileLastModification";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./PublicationEditingModal.module.scss";
import {getEditingPublicationSuccess} from "features/EditPublication/model/selectors/getEditingPublicationSuccess";

interface PublicationEditingModalProps extends Publication {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const PublicationEditingModal: React.FC<PublicationEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getEditingPublicationTitle);
    const year = useSelector(getEditingPublicationYear);
    const publicationType = useSelector(getEditingPublicationType);
    const edition = useSelector(getEditingPublicationEdition);
    const consultant = useSelector(getEditingPublicationConsultant);

    const fileContent = useSelector(getEditingPublicationFileContent);
    const fileLastModification = useSelector(getEditingPublicationFileLastModification);
    const fileType = useSelector(getEditingPublicationFileType);
    const fileSize = useSelector(getEditingPublicationFileSize);
    const fileName = useSelector(getEditingPublicationFileName);

    const isLoading = useSelector(getEditingPublicationIsLoading);
    const error = useSelector(getEditingPublicationError);
    const success = useSelector(getEditingPublicationSuccess);

    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при оправке запроса", "error");
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            openNotification("Успешно", "Документ успешно изменен", "success");
            batch(() => {
                dispatch(actions.setId(null));
                dispatch(actions.setTitle(null));
                dispatch(actions.setYear(null));
                dispatch(actions.setPublicationType(null));
                dispatch(actions.setEdition(null));
                dispatch(actions.setConsultant(null));
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchPublications(userId));
            });
        }
    }, [success]);

    useEffect(() => {
        if (open) {
            batch(() => {
                dispatch(actions.setId(props.id));
                dispatch(actions.setTitle(props.title));
                dispatch(actions.setYear(props.year));
                dispatch(actions.setPublicationType(props.publicationType));
                dispatch(actions.setEdition(props.edition));
                dispatch(actions.setConsultant(props.consultant));
            });
        } else {
            dispatch(actions.setId(null));
            dispatch(actions.setTitle(null));
            dispatch(actions.setYear(null));
            dispatch(actions.setPublicationType(null));
            dispatch(actions.setEdition(null));
            dispatch(actions.setConsultant(null));
            dispatch(actions.setFileName(null));
            dispatch(actions.setFileContent(null));
            dispatch(actions.setLastModification(null));
            dispatch(actions.setFileType(null));
            dispatch(actions.setFileSize(null));
        }
    }, [open]);

    const onTitleChange = useCallback((value: string) => {
        dispatch(actions.setTitle(value));
    }, [dispatch]);

    const onYearChange = useCallback((value: string) => {
        dispatch(actions.setYear(value));
    }, [dispatch]);

    const onPublicationTypeChange = useCallback((value: string) => {
        dispatch(actions.setPublicationType(value));
    }, [dispatch]);

    const onEditionChange = useCallback((value: string) => {
        dispatch(actions.setEdition(value));
    }, [dispatch]);

    const onConsultantChange = useCallback((value: string) => {
        dispatch(actions.setConsultant(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(editPublicationFile({
            id: props.id,
            title,
            year,
            publicationType,
            edition,
            consultant,
            userId,
            file: {
                content: fileContent, lastModification: fileLastModification, type: fileType, name: fileName, size: fileSize,
            },
        }));
        handleOk(event);
    };

    return (
        <Modal
            open={open}
            onOk={onSaveChanges}
            onCancel={handleCancel}
            width={1000}
            okText={"Сохранить"}
            cancelText={"Отменить"}
            confirmLoading={isLoading}
        >
            <div className={styles.container}>
                {contextHolder}
                <div className={styles.record}>
                    <p className={styles.title}>{"Название: "}</p>
                    <TextArea value={title} onChange={(value) => onTitleChange(value.target.value)} rows={5} style={{ resize: "none" }} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Год: "}</p>
                    <Input value={year} onChange={(value) => onYearChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Тип статьи: "}</p>
                    <Input value={publicationType} onChange={(value) => onPublicationTypeChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Издание: "}</p>
                    <Input value={edition} onChange={(value) => onEditionChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Консультант: "}</p>
                    <Input value={consultant} onChange={(value) => onConsultantChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Файл: "}</p>
                    <UploadFile
                        setFileContent={actions.setFileContent}
                        setFileName={actions.setFileName}
                        setLastModification={actions.setLastModification}
                        setType={actions.setFileType}
                        setSize={actions.setFileSize}
                    />
                </div>
                <div />
            </div>
        </Modal>
    );
};

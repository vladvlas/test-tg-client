import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { fetchPublications } from "entities/Publication";
import { addingPublicationFileActions as actions } from "features/AddPublication";
import { UploadFile } from "widgest/UploadFile";
import {
    getAddingPublicationTitle,
} from "features/AddPublication/model/selectors/getAddingPublicationTitle";
import {
    getAddingPublicationYear,
} from "features/AddPublication/model/selectors/getAddingPublicationYear";
import {
    getAddingPublicationType,
} from "features/AddPublication/model/selectors/getAddingPublicationType";
import {
    getAddingPublicationEdition,
} from "features/AddPublication/model/selectors/getAddingPublicationEdition";
import {
    getAddingPublicationConsultant,
} from "features/AddPublication/model/selectors/getAddingPublicationConsultant";
import {
    getAddingPublicationIsLoading,
} from "features/AddPublication/model/selectors/getAddingPublicationIsLoading";
import {
    getAddingPublicationError,
} from "features/AddPublication/model/selectors/getAddingPublicationError";
import { getUserAuthData } from "entities/User";
import { addPublicationFile } from "features/AddPublication/model/services/addPublicationFile";
import { getAddingPublicationFileContent } from "features/AddPublication/model/selectors/getAddingPublicationFileContent";
import {
    getAddingPublicationFileLastModification,
} from "features/AddPublication/model/selectors/getAddingPublicationFileLastModification";
import { getAddingPublicationFileType } from "features/AddPublication/model/selectors/getAddingPublicationFileType";
import { getAddingPublicationFileSize } from "features/AddPublication/model/selectors/getAddingPublicationFileSize";
import { getAddingPublicationFileName } from "features/AddPublication/model/selectors/getAddingPublicationFileName";
import styles from "./AddPublicationModal.module.scss";
import {useCustomNotification} from "shared/hooks/useCustomNotification";
import {getAddingPublicationSuccess} from "features/AddPublication/model/selectors/getAddingPublicationSuccess";

interface PublicationEditingModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const AddPublicationModal: React.FC<PublicationEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getAddingPublicationTitle);
    const year = useSelector(getAddingPublicationYear);
    const publicationType = useSelector(getAddingPublicationType);
    const edition = useSelector(getAddingPublicationEdition);
    const consultant = useSelector(getAddingPublicationConsultant);

    const fileContent = useSelector(getAddingPublicationFileContent);
    const fileLastModification = useSelector(getAddingPublicationFileLastModification);
    const fileType = useSelector(getAddingPublicationFileType);
    const fileSize = useSelector(getAddingPublicationFileSize);
    const fileName = useSelector(getAddingPublicationFileName);

    const isLoading = useSelector(getAddingPublicationIsLoading);
    const error = useSelector(getAddingPublicationError);
    const success = useSelector(getAddingPublicationSuccess);

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
            openNotification("Успешно", "Документ успешно добавлен", "success");
            batch(() => {
                dispatch(actions.setTitle(null));
                dispatch(actions.setPublicationType(null));
                dispatch(actions.setYear(null));
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
        await dispatch(addPublicationFile({
            id: "",
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

import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { addingPatentFileActions as actions } from "features/AddPatent";
import { UploadFile } from "widgest/UploadFile";
import { getUserAuthData } from "entities/User";
import { getAddingPatentTitle } from "features/AddPatent/model/selectors/getAddingPatentTitle";
import { getAddingPatentDate } from "features/AddPatent/model/selectors/getAddingPatentDate";
import { getAddingPatentIsLoading } from "features/AddPatent/model/selectors/getAddingPatentIsLoading";
import { getAddingPatentError } from "features/AddPatent/model/selectors/getAddingPatentError";
import { fetchPatents } from "entities/Patent";
import { addPatentFile } from "features/AddPatent/model/services/addPatentFile";
import { getAddingPatentFileContent } from "features/AddPatent/model/selectors/getAddingPatentFileContent";
import {
    getAddingPatentFileLastModification,
} from "features/AddPatent/model/selectors/getAddingPatentFileLastModification";
import { getAddingPatentFileType } from "features/AddPatent/model/selectors/getAddingPatentFileType";
import { getAddingPatentFileSize } from "features/AddPatent/model/selectors/getAddingPatentFileSize";
import { getAddingPatentFileName } from "features/AddPatent/model/selectors/getAddingPatentFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { getAddingPatentSuccess } from "features/AddPatent/model/selectors/getAddingPatentSuccess";
import styles from "./AddPatentModal.module.scss";

interface PublicationEditingModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const AddPatentModal: React.FC<PublicationEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getAddingPatentTitle);
    const date = useSelector(getAddingPatentDate);

    const fileContent = useSelector(getAddingPatentFileContent);
    const fileLastModification = useSelector(getAddingPatentFileLastModification);
    const fileType = useSelector(getAddingPatentFileType);
    const fileSize = useSelector(getAddingPatentFileSize);
    const fileName = useSelector(getAddingPatentFileName);

    const isLoading = useSelector(getAddingPatentIsLoading);
    const error = useSelector(getAddingPatentError);
    const success = useSelector(getAddingPatentSuccess);

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
                dispatch(actions.setTitle(""));
                dispatch(actions.setDate(""));
                dispatch(actions.setTitle(""));
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchPatents(userId));
            });
        }
    }, [success]);

    const onTitleChange = useCallback((value: string) => {
        dispatch(actions.setTitle(value));
    }, [dispatch]);

    const onDateChange = useCallback((value: string) => {
        dispatch(actions.setDate(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(addPatentFile({
            id: "",
            title,
            date,
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
                    <p className={styles.title}>{"Дата выдачи: "}</p>
                    <Input value={date} onChange={(value) => onDateChange(value.target.value)} />
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

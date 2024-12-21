import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { editingPatentFileActions as actions } from "features/EditPatent";
import { getUserAuthData } from "entities/User";
import { UploadFile } from "widgest/UploadFile";
import { getEditingPatentTitle } from "features/EditPatent/model/selectors/getEditingPatentTitle";
import { getEditingPatentDate } from "features/EditPatent/model/selectors/getEditingPatentDate";
import {
    getEditingPatentIsLoading,
} from "features/EditPatent/model/selectors/getEditingPatentIsLoading";
import { getEditingPatentError } from "features/EditPatent/model/selectors/getEditingPatentError";
import { fetchPatents, Patent } from "entities/Patent";
import { editPatentFile } from "features/EditPatent/model/services/editPatentFile";
import { getEditingPatentFileContent } from "features/EditPatent/model/selectors/getEditingPatentFileContent";
import {
    getEditingPatentFileLastModification,
} from "features/EditPatent/model/selectors/getEditingPatentFileLastModification";
import { getEditingPatentFileType } from "features/EditPatent/model/selectors/getEditingPatentFileType";
import { getEditingPatentFileSize } from "features/EditPatent/model/selectors/getEditingPatentFileSize";
import { getEditingPatentFileName } from "features/EditPatent/model/selectors/getEditingPatentFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./PatentEditingModal.module.scss";
import {getEditingPatentSuccess} from "features/EditPatent/model/selectors/getEditingPatentSuccess";

interface PatentEditingModalProps extends Patent {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const PatentEditingModal: React.FC<PatentEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getEditingPatentTitle);
    const date = useSelector(getEditingPatentDate);

    const fileContent = useSelector(getEditingPatentFileContent);
    const fileLastModification = useSelector(getEditingPatentFileLastModification);
    const fileType = useSelector(getEditingPatentFileType);
    const fileSize = useSelector(getEditingPatentFileSize);
    const fileName = useSelector(getEditingPatentFileName);

    const isLoading = useSelector(getEditingPatentIsLoading);
    const error = useSelector(getEditingPatentError);
    const success = useSelector(getEditingPatentSuccess);

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
                dispatch(fetchPatents(userId));
            });
        }
    }, [success]);

    useEffect(() => {
        if (open) {
            batch(() => {
                dispatch(actions.setId(props.id));
                dispatch(actions.setTitle(props.title));
                dispatch(actions.setDate(props.date));
            });
        } else {
            dispatch(actions.setId(""));
            dispatch(actions.setTitle(""));
            dispatch(actions.setDate(""));
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

    const onDateChange = useCallback((value: string) => {
        dispatch(actions.setDate(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(editPatentFile({
            id: props.id,
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

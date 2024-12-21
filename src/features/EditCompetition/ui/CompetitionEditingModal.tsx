import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { editingCompetitionFileActions as actions } from "features/EditCompetition";
import { getUserAuthData } from "entities/User";
import { UploadFile } from "widgest/UploadFile";
import { getEditingCompetitionResult } from "features/EditCompetition/model/selectors/getEditingCompetitionResult";
import { getEditingCompetitionYear } from "features/EditCompetition/model/selectors/getEditingCompetitionYear";
import { getEditingCompetitionTitle } from "features/EditCompetition/model/selectors/getEditingCompetitionTitle";
import { getEditingCompetitionIsLoading } from "features/EditCompetition/model/selectors/getEditingCompetitionIsLoading";
import { getEditingCompetitionError } from "features/EditCompetition/model/selectors/getEditingCompetitionError";
import { Competition, fetchCompetitions } from "entities/Competition";
import { editCompetitionFile } from "features/EditCompetition/model/services/editConferenceFile";
import {
    getEditingCompetitionFileContent,
} from "features/EditCompetition/model/selectors/getEditingCompetitionFileContent";
import {
    getEditingCompetitionFileLastModification,
} from "features/EditCompetition/model/selectors/getEditingCompetitionFileLastModification";
import { getEditingCompetitionFileType } from "features/EditCompetition/model/selectors/getEditingCompetitionFileType";
import { getEditingCompetitionFileSize } from "features/EditCompetition/model/selectors/getEditingCompetitionFileSize";
import { getEditingCompetitionFileName } from "features/EditCompetition/model/selectors/getEditingCompetitionFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { getEditingCompetitionSuccess } from "features/EditCompetition/model/selectors/getEditingCompetitionSuccess";
import styles from "./CompetitionEditingModal.module.scss";

interface ConferenceEditingModalProps extends Competition {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const CompetitionEditingModal: React.FC<ConferenceEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getEditingCompetitionTitle);
    const year = useSelector(getEditingCompetitionYear);
    const result = useSelector(getEditingCompetitionResult);

    const fileContent = useSelector(getEditingCompetitionFileContent);
    const fileLastModification = useSelector(getEditingCompetitionFileLastModification);
    const fileType = useSelector(getEditingCompetitionFileType);
    const fileSize = useSelector(getEditingCompetitionFileSize);
    const fileName = useSelector(getEditingCompetitionFileName);

    const isLoading = useSelector(getEditingCompetitionIsLoading);
    const error = useSelector(getEditingCompetitionError);
    const success = useSelector(getEditingCompetitionSuccess);

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
                dispatch(fetchCompetitions(userId));
            });
        }
    }, [success]);

    useEffect(() => {
        if (open) {
            batch(() => {
                dispatch(actions.setId(props.id));
                dispatch(actions.setTitle(props.title));
                dispatch(actions.setYear(props.year));
                dispatch(actions.setResult(props.result));
            });
        } else {
            dispatch(actions.setId(""));
            dispatch(actions.setTitle(""));
            dispatch(actions.setYear(""));
            dispatch(actions.setResult(""));
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

    const onResultChange = useCallback((value: string) => {
        dispatch(actions.setResult(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(editCompetitionFile({
            id: props.id,
            title,
            year,
            result,
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
                    <p className={styles.title}>{"Результат: "}</p>
                    <Input value={result} onChange={(value) => onResultChange(value.target.value)} />
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

import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { addCompetitionFile, addingCompetitionFileActions as actions } from "features/AddCompetition";
import { UploadFile } from "widgest/UploadFile";
import { getUserAuthData } from "entities/User";
import { getAddingCompetitionResult } from "features/AddCompetition/model/selectors/getAddingCompetitionResult";
import { getAddingCompetitionYear } from "features/AddCompetition/model/selectors/getAddingCompetitionYear";
import { getAddingCompetitionTitle } from "features/AddCompetition/model/selectors/getAddingCompetitionTitle";
import { getAddingCompetitionFileContent } from "features/AddCompetition/model/selectors/getAddingCompetitionFileContent";
import { getAddingCompetitionIsLoading } from "features/AddCompetition/model/selectors/getAddingCompetitionIsLoading";
import { getAddingCompetitionError } from "features/AddCompetition/model/selectors/getAddingCompetitionError";
import { fetchCompetitions } from "entities/Competition";
import {
    getAddingCompetitionFileLastModification,
} from "features/AddCompetition/model/selectors/getAddingCompetitionFileLastModification";
import { getAddingCompetitionFileType } from "features/AddCompetition/model/selectors/getAddingCompetitionFileType";
import { getAddingCompetitionFileSize } from "features/AddCompetition/model/selectors/getAddingCompetitionFileSize";
import { getAddingCompetitionFileName } from "features/AddCompetition/model/selectors/getAddingCompetitionFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { getAddingCompetitionSuccess } from "features/AddCompetition/model/selectors/getAddingCompetitionSuccess";
import styles from "./AddCompetitionModal.module.scss";

interface AddConferenceModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const AddCompetitionModal: React.FC<AddConferenceModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getAddingCompetitionTitle);
    const year = useSelector(getAddingCompetitionYear);
    const result = useSelector(getAddingCompetitionResult);

    const fileContent = useSelector(getAddingCompetitionFileContent);
    const fileLastModification = useSelector(getAddingCompetitionFileLastModification);
    const fileType = useSelector(getAddingCompetitionFileType);
    const fileSize = useSelector(getAddingCompetitionFileSize);
    const fileName = useSelector(getAddingCompetitionFileName);

    const isLoading = useSelector(getAddingCompetitionIsLoading);
    const error = useSelector(getAddingCompetitionError);
    const success = useSelector(getAddingCompetitionSuccess);

    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;

    const [contextHolder, openNotification] = useCustomNotification();

    console.log("AddCompetitionModal");

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при оправке запроса", "error");
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            openNotification("Успешно", "Документ успешно добавлен", "success");
            batch(() => {
                dispatch(actions.setId(""));
                dispatch(actions.setTitle(""));
                dispatch(actions.setResult(""));
                dispatch(actions.setYear(""));
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchCompetitions(userId));
            });
        }
    }, [success]);

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
        await dispatch(addCompetitionFile({
            id: "",
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

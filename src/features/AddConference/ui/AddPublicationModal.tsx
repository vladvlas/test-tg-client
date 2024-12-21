import React, { useCallback, useEffect } from "react";
import { Checkbox, Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { addingConferenceFileActions as actions } from "features/AddConference";
import { UploadFile } from "widgest/UploadFile";
import { getUserAuthData } from "entities/User";
import { getAddingConferenceTitle } from "features/AddConference/model/selectors/getAddingConferenceTitle";
import { getAddingConferenceYear } from "features/AddConference/model/selectors/getAddingConferenceYear";
import {
    getAddingConferenceParticipationOption,
} from "features/AddConference/model/selectors/getAddingConferenceParticipationOption";
import { getAddingConferenceLevel } from "features/AddConference/model/selectors/getAddingConferenceLevel";
import { getAddingConferenceIsWin } from "features/AddConference/model/selectors/getAddingConferenceIsWin";
import { getAddingConferenceIsLoading } from "features/AddConference/model/selectors/getAddingConferenceIsLoading";
import { getAddingConferenceError } from "features/AddConference/model/selectors/getAddingConferenceError";
import { addConferenceFile } from "features/AddConference/model/services/addConferenceFile";
import { fetchConferences } from "entities/Conference";
import { getAddingConferenceFileContent } from "features/AddConference/model/selectors/getAddingConferenceFileContent";
import {
    getAddingConferenceFileLastModification,
} from "features/AddConference/model/selectors/getAddingConferenceFileLastModification";
import { getAddingConferenceFileType } from "features/AddConference/model/selectors/getAddingConferenceFileType";
import { getAddingConferenceFileSize } from "features/AddConference/model/selectors/getAddingConferenceFileSize";
import { getAddingConferenceFileName } from "features/AddConference/model/selectors/getAddingConferenceFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./AddPublicationModal.module.scss";
import {getAddingConferenceSuccess} from "features/AddConference/model/selectors/getAddingConferenceSuccess";

interface AddConferenceModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const AddConferenceModal: React.FC<AddConferenceModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getAddingConferenceTitle);
    const year = useSelector(getAddingConferenceYear);
    const participationOption = useSelector(getAddingConferenceParticipationOption);
    const level = useSelector(getAddingConferenceLevel);
    const isWin = useSelector(getAddingConferenceIsWin);

    const fileContent = useSelector(getAddingConferenceFileContent);
    const fileLastModification = useSelector(getAddingConferenceFileLastModification);
    const fileType = useSelector(getAddingConferenceFileType);
    const fileSize = useSelector(getAddingConferenceFileSize);
    const fileName = useSelector(getAddingConferenceFileName);

    const isLoading = useSelector(getAddingConferenceIsLoading);
    const error = useSelector(getAddingConferenceError);
    const success = useSelector(getAddingConferenceSuccess);

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
                dispatch(actions.setId(null));
                dispatch(actions.setTitle(null));
                dispatch(actions.setLevel(null));
                dispatch(actions.setYear(null));
                dispatch(actions.setParticipationOption(null));
                dispatch(actions.setIsWin(false));
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchConferences(userId));
            });
        }
    }, [success]);

    const onTitleChange = useCallback((value: string) => {
        dispatch(actions.setTitle(value));
    }, [dispatch]);

    const onYearChange = useCallback((value: string) => {
        dispatch(actions.setYear(value));
    }, [dispatch]);

    const onLevelChange = useCallback((value: string) => {
        dispatch(actions.setLevel(value));
    }, [dispatch]);

    const onParticipationOptionChange = useCallback((value: string) => {
        dispatch(actions.setParticipationOption(value));
    }, [dispatch]);

    const onIsWinChange = useCallback((value: boolean) => {
        dispatch(actions.setIsWin(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(addConferenceFile({
            id: "",
            title,
            year,
            participationOption,
            level,
            isWin,
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
                    <p className={styles.title}>{"Масштаб: "}</p>
                    <Input value={level} onChange={(value) => onLevelChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Вариант участия: "}</p>
                    <Input value={participationOption} onChange={(value) => onParticipationOptionChange(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Победитель: "}</p>
                    <Checkbox
                        checked={isWin}
                        onChange={(value) => onIsWinChange(value.target.checked)}
                        className={"checkbox"}
                    />
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

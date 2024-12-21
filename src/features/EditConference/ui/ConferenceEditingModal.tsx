import React, { useCallback, useEffect } from "react";
import { Checkbox, Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { editingConferenceFileActions as actions } from "features/EditConference";
import { getUserAuthData } from "entities/User";
import { UploadFile } from "widgest/UploadFile";
import { Conference, fetchConferences } from "entities/Conference";
import { getEditingConferenceTitle } from "features/EditConference/model/selectors/getEditingConferenceTitle";
import {
    getEditingConferenceParticipationOption,
} from "features/EditConference/model/selectors/getEditingConferenceParticipationOption";
import { getEditingConferenceIsWin } from "features/EditConference/model/selectors/getEditingConferenceIsWin";
import { getEditingConferenceIsLoading } from "features/EditConference/model/selectors/getEditingConferenceIsLoading";
import { getEditingConferenceError } from "features/EditConference/model/selectors/getEditingConferenceError";
import { editConferenceFile } from "features/EditConference/model/services/editConferenceFile";
import { getEditingConferenceLevel } from "features/EditConference/model/selectors/getEditingConferenceLevel";
import { getEditingConferenceFileContent } from "features/EditConference/model/selectors/getEditingConferenceFileContent";
import {
    getEditingConferenceFileLastModification,
} from "features/EditConference/model/selectors/getEditingConferenceFileLastModification";
import { getEditingConferenceFileType } from "features/EditConference/model/selectors/getEditingConferenceFileType";
import { getEditingConferenceFileSize } from "features/EditConference/model/selectors/getEditingConferenceFileSize";
import { getEditingConferenceFileName } from "features/EditConference/model/selectors/getEditingConferenceFileName";
import { getEditingConferenceYear } from "features/EditConference/model/selectors/getEditingConferenceYear";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./ConferenceEditingModal.module.scss";
import {getEditingConferenceSuccess} from "features/EditConference/model/selectors/getEditingConferenceSuccess";

interface ConferenceEditingModalProps extends Conference {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const ConferenceEditingModal: React.FC<ConferenceEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getEditingConferenceTitle);
    const year = useSelector(getEditingConferenceYear);
    const participationOption = useSelector(getEditingConferenceParticipationOption);
    const level = useSelector(getEditingConferenceLevel);
    const isWin = useSelector(getEditingConferenceIsWin);

    const fileContent = useSelector(getEditingConferenceFileContent);
    const fileLastModification = useSelector(getEditingConferenceFileLastModification);
    const fileType = useSelector(getEditingConferenceFileType);
    const fileSize = useSelector(getEditingConferenceFileSize);
    const fileName = useSelector(getEditingConferenceFileName);

    const isLoading = useSelector(getEditingConferenceIsLoading);
    const error = useSelector(getEditingConferenceError);
    const success = useSelector(getEditingConferenceSuccess);

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
                batch(() => {
                    dispatch(actions.setId(""));
                    dispatch(actions.setTitle(""));
                    dispatch(actions.setYear(""));
                    dispatch(actions.setLevel(""));
                    dispatch(actions.setParticipationOption(""));
                    dispatch(actions.setIsWin(false));
                    dispatch(actions.setId(""));
                    dispatch(actions.setTitle(""));
                    dispatch(actions.setLevel(""));
                    dispatch(actions.setYear(""));
                    dispatch(actions.setParticipationOption(""));
                    dispatch(actions.setIsWin(false));
                    dispatch(fetchConferences(userId));
                });
            });
        }
    }, [success]);

    useEffect(() => {
        if (open) {
            batch(() => {
                dispatch(actions.setId(props.id));
                dispatch(actions.setTitle(props.title));
                dispatch(actions.setYear(props.year));
                dispatch(actions.setLevel(props.level));
                dispatch(actions.setParticipationOption(props.participationOption));
                dispatch(actions.setIsWin(props.isWin));
            });
        } else {
            dispatch(actions.setId(""));
            dispatch(actions.setTitle(""));
            dispatch(actions.setYear(""));
            dispatch(actions.setLevel(""));
            dispatch(actions.setParticipationOption(""));
            dispatch(actions.setIsWin(false));
            dispatch(actions.setFileContent(undefined));
        }
    }, [open]);

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
        await dispatch(editConferenceFile({
            id: props.id,
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

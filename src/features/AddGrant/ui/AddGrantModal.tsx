import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { addingGrantFileActions as actions } from "features/AddGrant";
import { UploadFile } from "widgest/UploadFile";
import { getUserAuthData } from "entities/User";
import { getAddingGrantTitle } from "features/AddGrant/model/selectors/getAddingGrantTitle";
import { getAddingGrantParticipation } from "features/AddGrant/model/selectors/getAddingGrantParticipation";
import { getAddingGrantIsLoading } from "features/AddGrant/model/selectors/getAddingGrantIsLoading";
import { getAddingGrantError } from "features/AddGrant/model/selectors/getAddingGrantError";
import { addGrantFile } from "features/AddGrant/model/services/addPatentFile";
import { fetchGrants } from "entities/Grant";
import { getAddingConferenceFileContent } from "features/AddConference/model/selectors/getAddingConferenceFileContent";
import {
    getAddingConferenceFileLastModification,
} from "features/AddConference/model/selectors/getAddingConferenceFileLastModification";
import { getAddingConferenceFileType } from "features/AddConference/model/selectors/getAddingConferenceFileType";
import { getAddingConferenceFileSize } from "features/AddConference/model/selectors/getAddingConferenceFileSize";
import { getAddingConferenceFileName } from "features/AddConference/model/selectors/getAddingConferenceFileName";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./AddGrantModal.module.scss";
import {getAddingGrantSuccess} from "features/AddGrant/model/selectors/getAddingGrantSuccess";

interface PublicationEditingModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const AddGrantModal: React.FC<PublicationEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getAddingGrantTitle);
    const participation = useSelector(getAddingGrantParticipation);

    const fileContent = useSelector(getAddingConferenceFileContent);
    const fileLastModification = useSelector(getAddingConferenceFileLastModification);
    const fileType = useSelector(getAddingConferenceFileType);
    const fileSize = useSelector(getAddingConferenceFileSize);
    const fileName = useSelector(getAddingConferenceFileName);

    const isLoading = useSelector(getAddingGrantIsLoading);
    const error = useSelector(getAddingGrantError);
    const success = useSelector(getAddingGrantSuccess);

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
                dispatch(actions.setParticipation(""));
                dispatch(actions.setId(""));
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchGrants(userId));
            });
        }
    }, [success]);

    const onTitleChange = useCallback((value: string) => {
        dispatch(actions.setTitle(value));
    }, [dispatch]);

    const onParticipationChange = useCallback((value: string) => {
        dispatch(actions.setParticipation(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(addGrantFile({
            id: "",
            title,
            participation,
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
                    <p className={styles.title}>{"Участие: "}</p>
                    <Input value={participation} onChange={(value) => onParticipationChange(value.target.value)} />
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

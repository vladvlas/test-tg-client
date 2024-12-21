import React, { useCallback, useEffect } from "react";
import { Modal } from "antd";
import { Input } from "antd/lib";
import TextArea from "antd/es/input/TextArea";
import { batch, useDispatch, useSelector } from "react-redux";
import { editingGrantFileActions as actions } from "features/EditGrant";
import { getUserAuthData } from "entities/User";
import { UploadFile } from "widgest/UploadFile";
import { fetchGrants, Grant } from "entities/Grant";
import { getEditingGrantTitle } from "features/EditGrant/model/selectors/getEditingGrantTitle";
import { getEditingGrantParticipation } from "features/EditGrant/model/selectors/getEditingGrantParticipation";
import { getEditingGrantIsLoading } from "features/EditGrant/model/selectors/getEditingGrantIsLoading";
import { getEditingGrantError } from "features/EditGrant/model/selectors/getEditingGrantError";
import { editGrantFile } from "features/EditGrant/model/services/editGrantFile";
import { getEditingGrantFileContent } from "features/EditGrant/model/selectors/getEditingGrantFileContent";
import {
    getEditingGrantFileLastModification,
} from "features/EditGrant/model/selectors/getEditingGrantFileLastModification";
import { getEditingGrantFileName } from "features/EditGrant/model/selectors/getEditingGrantFileName";
import { getEditingGrantFileSize } from "features/EditGrant/model/selectors/getEditingGrantFileSize";
import { getEditingGrantFileType } from "features/EditGrant/model/selectors/getEditingGrantFileType";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./GrantEditingModal.module.scss";
import {getEditingGrantSuccess} from "features/EditGrant/model/selectors/getEditingGrantSuccess";

interface PatentEditingModalProps extends Grant {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

}

export const GrantEditingModal: React.FC<PatentEditingModalProps> = (props) => {
    const {
        open, handleOk, handleCancel,
    } = props;
    const dispatch = useDispatch();

    const title = useSelector(getEditingGrantTitle);
    const participation = useSelector(getEditingGrantParticipation);

    const fileContent = useSelector(getEditingGrantFileContent);
    const fileLastModification = useSelector(getEditingGrantFileLastModification);
    const fileType = useSelector(getEditingGrantFileType);
    const fileSize = useSelector(getEditingGrantFileSize);
    const fileName = useSelector(getEditingGrantFileName);

    const isLoading = useSelector(getEditingGrantIsLoading);
    const error = useSelector(getEditingGrantError);
    const success = useSelector(getEditingGrantSuccess);

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

    useEffect(() => {
        if (open) {
            batch(() => {
                dispatch(actions.setId(props.id));
                dispatch(actions.setTitle(props.title));
                dispatch(actions.setParticipation(props.participation));
            });
        } else {
            dispatch(actions.setId(""));
            dispatch(actions.setTitle(""));
            dispatch(actions.setParticipation(""));
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

    const onParticipationChange = useCallback((value: string) => {
        dispatch(actions.setParticipation(value));
    }, [dispatch]);

    const onSaveChanges = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(editGrantFile({
            id: props.id,
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
            {contextHolder}
            <div className={styles.container}>
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

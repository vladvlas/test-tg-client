import React, { useCallback, useEffect } from "react";
import { getUserAuthData } from "entities/User";
import { batch, useDispatch, useSelector } from "react-redux";
import { getDissertationFileName } from "entities/DissertationFile/model/selectors/getDissertationFileName";
import { getDissertationIsLoading } from "entities/DissertationFile/model/selectors/getDissertationIsLoading";
import { getDissertationError } from "entities/DissertationFile/model/selectors/getDissertationError";
import { getDissertationFileContent } from "entities/DissertationFile/model/selectors/getDissertationFileContent";
import { getDefenseDate } from "entities/DissertationFile/model/selectors/getDefenseDate";
import { getIsAdmitted } from "entities/DissertationFile/model/selectors/getIsAdmitted";
import { UploadFile } from "widgest/UploadFile";
import { dissertationFileActions as actions, fetchDissertation } from "entities/DissertationFile";
import {
    getDissertationFileLastModification,
} from "entities/DissertationFile/model/selectors/getDissertationFileLastModification";
import { getDissertationFileSize } from "entities/DissertationFile/model/selectors/getDissertationFileSize";
import { getDissertationFileType } from "entities/DissertationFile/model/selectors/getDissertationFileType";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import { getDefenseStatus } from "entities/DissertationFile/model/selectors/getDefenseStatus";
import { StatusViewer } from "widgest/StatusViewer";
import { Button } from "antd";
import { addDissertationFile } from "entities/DissertationFile/model/services/addDissertationFile";
import { getDefenseId } from "entities/DissertationFile/model/selectors/getDefenseId";
import { getDissertationIsAddLoading } from "entities/DissertationFile/model/selectors/getDissertationIsAddLoading";
import { getDissertationAddError } from "entities/DissertationFile/model/selectors/getDissertationAddError";
import { getDissertationAddSuccess } from "entities/DissertationFile/model/selectors/getDissertationAddSuccess";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./DissertationCard.module.scss";

export const DissertationCard: React.FC = () => {
    const userId = useSelector(getUserAuthData).id;
    const defenseDate = useSelector(getDefenseDate);
    const isAdmitted = useSelector(getIsAdmitted);

    const fileName = useSelector(getDissertationFileName);
    const fileContent = useSelector(getDissertationFileContent);
    const fileLastModification = useSelector(getDissertationFileLastModification);
    const fileType = useSelector(getDissertationFileType);
    const fileSize = useSelector(getDissertationFileSize);
    const id = useSelector(getDefenseId);
    const status = useSelector(getDefenseStatus);

    const isLoading = useSelector(getDissertationIsLoading);
    const isAddLoading = useSelector(getDissertationIsAddLoading);
    const error = useSelector(getDissertationError);
    const addError = useSelector(getDissertationAddError);
    const success = useSelector(getDissertationAddSuccess);

    const showStub = !defenseDate && !fileName;

    const dispatch = useDispatch();

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (addError) {
            openNotification("Ошибка", "Ошибка при оправке запроса", "error");
        }
    }, [addError]);

    useEffect(() => {
        if (success) {
            openNotification("Успешно", "Документ успешно добавлен", "success");
            batch(() => {
                dispatch(actions.setFileName(null));
                dispatch(actions.setFileContent(null));
                dispatch(actions.setLastModification(null));
                dispatch(actions.setFileType(null));
                dispatch(actions.setFileSize(null));
                dispatch(fetchDissertation(userId));
            });
        }
    }, [success]);

    useEffect(() => {
        dispatch(fetchDissertation(userId));
    }, [dispatch]);

    const onCancelChanges = useCallback(() => {
        dispatch(actions.setFileContent(null));
        dispatch(fetchDissertation(userId));
    }, [dispatch]);

    const onSaveChanges = async () => {
        await dispatch(addDissertationFile({
            userId,
            id,
            content: fileContent,
            lastModification: fileLastModification,
            type: fileType,
            name: fileName,
            size: fileSize,
        }));
    };

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения данных по защите"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {contextHolder}
                    {
                        !showStub ? (
                            <div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Дата защиты: "}</p>
                                    <p className={styles.description}>{defenseDate}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Допущен к защите: "}</p>
                                    <p className={styles.description}>{isAdmitted ? "Да" : "Нет"}</p>
                                </div>
                                <UploadFile
                                    setFileContent={actions.setFileContent}
                                    setFileName={actions.setFileName}
                                    setLastModification={actions.setLastModification}
                                    setType={actions.setFileType}
                                    setSize={actions.setFileSize}
                                />
                                {
                                    fileName ? (
                                        <p className={styles.description}>{fileName}</p>
                                    ) : null
                                }
                                {
                                    (!fileContent && fileName) ? (
                                        <div className={styles.record}>
                                            <p className={styles.title}>{"Статус: "}</p>
                                            <StatusViewer type={status} />
                                        </div>
                                    ) : null
                                }
                                {
                                    fileContent ? (
                                        <div className={styles.buttons}>
                                            <Button loading={isAddLoading} type={"primary"} onClick={onSaveChanges}>{"Сохранить изменения"}</Button>
                                            <Button type={"primary"} className={"btn-red"} onClick={onCancelChanges}>{"Отменить"}</Button>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ) : null
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

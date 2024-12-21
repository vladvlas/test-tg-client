import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdviserData } from "entities/Adviser/model/selectors/getAdviserData/getAdviserData";
import { getAdviserIsLoading } from "entities/Adviser/model/selectors/getAdviserIsLoading/getAdviserIsLoading";
import { getAdviserError } from "entities/Adviser/model/selectors/getAdviserError/getAdviserError";
import { fetchAdviserProfileData } from "entities/Adviser/model/services/fetchAdviseProfileData/fetchAdviseProfileData";
import { getUserAuthData } from "entities/User";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./AdviserProfile.module.scss";

export const AdviserProfile: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getAdviserData);
    const isLoading = useSelector(getAdviserIsLoading);
    const error = useSelector(getAdviserError);
    const userId = useSelector(getUserAuthData).id;

    const showStub = !data;

    useEffect(() => {
        dispatch(fetchAdviserProfileData(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения данных руководителя"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data ? (
                            <div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Фамилия:"}</p>
                                    <p className={styles.info}>{data.surname}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Имя:"}</p>
                                    <p className={styles.info}>{data.name}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Отчество:"}</p>
                                    <p className={styles.info}>{data.patronymic}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Ученая степень:"}</p>
                                    <p className={styles.info}>{data.academicDegree}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Шифр специальности:"}</p>
                                    <p className={styles.info}>{data.specialtyCode}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Ученое звание:"}</p>
                                    <p className={styles.info}>{data.academicRank}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Кафедра:"}</p>
                                    <p className={styles.info}>{data.department}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Дата рождения:"}</p>
                                    <p className={styles.info}>{data.birthday}</p>
                                </div>
                            </div>
                        ) : null
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

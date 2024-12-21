import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import { getProfileData } from "entities/EmployeeProfile/model/selectors/getProfileData";
import { getProfileIsLoading } from "entities/EmployeeProfile/model/selectors/getProfileIsLoading";
import { getProfileError } from "entities/EmployeeProfile/model/selectors/getProfileError";
import { fetchEmployeeProfileData } from "entities/EmployeeProfile";
import { getUserAuthData } from "entities/User";
import styles from "./EmployeeProfileCard.module.scss";

export const EmployeeProfileCard: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const showStub = !data;

    const userId = userAuthData.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployeeProfileData(userId));
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
                                    <p className={styles.title}>{"Номер телефона:"}</p>
                                    <p className={styles.info}>{data.phoneNumber}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Почта:"}</p>
                                    <p className={styles.info}>{data.email}</p>
                                </div>
                                <div className={styles.record}>
                                    <p className={styles.title}>{"Должность:"}</p>
                                    <p className={styles.info}>{data.position}</p>
                                </div>
                            </div>
                        ) : null
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

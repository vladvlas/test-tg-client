import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { fetchProfileData, ProfileTitles } from "entities/Profile";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import { getUserAuthData } from "entities/User";
import styles from "./ProfileCard.module.scss";

export const ProfileCard: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const showStub = !data;

    const userId = userAuthData.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProfileData(userId));
    }, [dispatch]);

    return (

        <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения данных профиля"} error={error}>
            <Stub show={showStub} text={"Ничего не найдено"}>
                {
                    data ? (
                        <div className={styles.container}>
                            <div>
                                <p className={styles.title}>{`${ProfileTitles.NAME} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.SURNAME} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.PATRONYMIC} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.BIRTHDAY} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.FACULTY} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.DEPARTMENT} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.DIRECTION} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.GROUPNUMBER} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.EDUCATIONTYPE} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.EDUCATIONFORM} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.ISBUDGET} : `}</p>
                                <p className={styles.title}>{`${ProfileTitles.CLASS} : `}</p>
                            </div>
                            <div>
                                <p className={styles.description}>{data.name}</p>
                                <p className={styles.description}>{data.surname}</p>
                                <p className={styles.description}>{data.patronymic}</p>
                                <p className={styles.description}>{data.birthday}</p>
                                <p className={styles.description}>{data.faculty}</p>
                                <p className={styles.description}>{data.department}</p>
                                <p className={styles.description}>{data.direction}</p>
                                <p className={styles.description}>{data.groupNumber}</p>
                                <p className={styles.description}>{data.educationType}</p>
                                <p className={styles.description}>{data.educationForm}</p>
                                <p className={styles.description}>{data.isBudget ? "Да" : "Нет"}</p>
                                <p className={styles.description}>{data.class}</p>
                            </div>
                        </div>
                    ) : null
                }
            </Stub>
        </PendingErrorGuard>
    );
};

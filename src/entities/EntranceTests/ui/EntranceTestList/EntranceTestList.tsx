import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEntranceTestsData } from "entities/EntranceTests/model/selectors/getEntranceTestsData/getEntranceTestsData";
import {
    getEntranceTestsIsLoading,
} from "entities/EntranceTests/model/selectors/getEntranceTestsIsLoading/getEntranceTestsIsLoading";
import {
    getEntranceTestsError,
} from "entities/EntranceTests/model/selectors/getEntranceTestsError/getEntranceTestsError";
import { fetchEntranceTests } from "entities/EntranceTests/model/services/fetchEntranceTests/fetchEntranceTests";
import { getUserAuthData } from "entities/User";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./EntranceTestList.module.scss";

export const EntranceTestList: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector(getEntranceTestsData);
    const isLoading = useSelector(getEntranceTestsIsLoading);
    const error = useSelector(getEntranceTestsError);
    const userId = useSelector(getUserAuthData).id;

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchEntranceTests(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения результатов вступительных испытаний"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    <div className={styles.header}>
                        <div>{"Название вступительного испытания"}</div>
                        <div>{"Оценка"}</div>
                    </div>
                    <div className={styles.content}>
                        {
                            data.map((entranceTest) => (
                                <div className={styles.row} key={entranceTest.title}>
                                    <div>
                                        {entranceTest.title}
                                    </div>
                                    <div>
                                        {entranceTest.grade}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

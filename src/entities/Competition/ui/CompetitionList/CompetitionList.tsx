import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { CompetitionCard, fetchCompetitions } from "entities/Competition";
import { getCompetitionsData } from "entities/Competition/model/selectors/getCompetitionsData";
import { getCompetitionsError } from "entities/Competition/model/selectors/getCompetitionsError";
import { getCompetitionsIsLoading } from "entities/Competition/model/selectors/getCompetitionsIsLoading";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./CompetitionList.module.scss";

export const CompetitionList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getCompetitionsData);
    const error = useSelector(getCompetitionsError);
    const isLoading = useSelector(getCompetitionsIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchCompetitions(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения конкурсов"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((competition) => (
                            <CompetitionCard
                                key={competition.id}
                                id={competition.id}
                                title={competition.title}
                                year={competition.year}
                                result={competition.result}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

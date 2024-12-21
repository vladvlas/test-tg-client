import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { ConferenceCard, fetchConferences } from "entities/Conference";
import { getConferencesData } from "entities/Conference/model/selectors/getConferencesData";
import { getConferencesError } from "entities/Conference/model/selectors/getConferencesError";
import { getConferencesIsLoading } from "entities/Conference/model/selectors/getConferencesIsLoading";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./ConferenceList.module.scss";

export const ConferenceList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getConferencesData);
    const error = useSelector(getConferencesError);
    const isLoading = useSelector(getConferencesIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchConferences(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения конференций"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((conference) => (
                            <ConferenceCard
                                key={conference.id}
                                id={conference.id}
                                title={conference.title}
                                year={conference.year}
                                level={conference.level}
                                participationOption={conference.participationOption}
                                isWin={conference.isWin}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

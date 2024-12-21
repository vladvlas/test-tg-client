import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { fetchGrants, GrantCard } from "entities/Grant";
import { getGrantsData } from "entities/Grant/model/selectors/getGrantsData";
import { getGrantsError } from "entities/Grant/model/selectors/getGrantsError";
import { getGrantsIsLoading } from "entities/Grant/model/selectors/getGrantsIsLoading";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./GrantList.module.scss";

export const GrantList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getGrantsData);
    const error = useSelector(getGrantsError);
    const isLoading = useSelector(getGrantsIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchGrants(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения грантов"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((grant) => (
                            <GrantCard
                                key={grant.id}
                                id={grant.id}
                                title={grant.title}
                                participation={grant.participation}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

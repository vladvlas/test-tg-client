import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getPatentsData } from "entities/Patent/model/selectors/getPatentsData";
import { getPatentsError } from "entities/Patent/model/selectors/getPatentsError";
import { getPatentsIsLoading } from "entities/Patent/model/selectors/getPatentsIsLoading";
import { fetchPatents } from "entities/Patent";
import { PatentCard } from "entities/Patent/model/ui/PatentCard/PatentCard";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./PublicationList.module.scss";

export const PatentList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getPatentsData);
    const error = useSelector(getPatentsError);
    const isLoading = useSelector(getPatentsIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchPatents(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения патентов"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((patent) => (
                            <PatentCard
                                key={patent.id}
                                id={patent.id}
                                title={patent.title}
                                date={patent.date}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

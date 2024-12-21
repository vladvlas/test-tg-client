import React, { useEffect } from "react";
import { getPublicationsData } from "entities/Publication/model/selectors/getPublicationsData";
import { useDispatch, useSelector } from "react-redux";
import { getPublicationsError } from "entities/Publication/model/selectors/getPublicationsError";
import {
    getPublicationsIsLoading,
} from "entities/Publication/model/selectors/getPublicationsIsLoading";
import { fetchPublications } from "entities/Publication";
import { getUserAuthData } from "entities/User";
import { PublicationCard } from "entities/Publication/model/ui/PublicationCard/PublicationCard";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./PublicationList.module.scss";

export const PublicationList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getPublicationsData);
    const error = useSelector(getPublicationsError);
    const isLoading = useSelector(getPublicationsIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchPublications(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения публикаций"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((publication) => (
                            <PublicationCard
                                key={publication.id}
                                id={publication.id}
                                title={publication.title}
                                year={publication.year}
                                publicationType={publication.publicationType}
                                edition={publication.edition}
                                consultant={publication.consultant}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

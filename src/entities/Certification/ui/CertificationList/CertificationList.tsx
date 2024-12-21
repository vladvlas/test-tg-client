import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getCertificationsData } from "entities/Certification/model/selectors/getCertificationsData";
import { getCertificationsError } from "entities/Certification/model/selectors/getCertificationsError";
import { getCertificationsIsLoading } from "entities/Certification/model/selectors/getCertificationsIsLoading";
import { fetchCertifications } from "entities/Certification";
import { CertificationCard } from "entities/Certification/ui/CertificationCard/CertificationCard";
import { PendingErrorGuard } from "widgest/PendingErrorGuard";
import { Stub } from "widgest/Stub";
import styles from "./CertificationList.module.scss";

export const CertificationList: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);
    const userId = userAuthData.id;
    const data = useSelector(getCertificationsData);
    const error = useSelector(getCertificationsError);
    const isLoading = useSelector(getCertificationsIsLoading);
    const dispatch = useDispatch();

    const showStub = data.length === 0;

    useEffect(() => {
        dispatch(fetchCertifications(userId));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <PendingErrorGuard isLoading={isLoading} title={"Ошибка при попытке получения данных аттестации"} error={error}>
                <Stub show={showStub} text={"Ничего не найдено"}>
                    {
                        data.map((certification) => (
                            <CertificationCard
                                key={certification.id}
                                id={certification.id}
                                semester={certification.semester}
                                result={certification.result}
                                userId={userId}
                            />
                        ))
                    }
                </Stub>
            </PendingErrorGuard>
        </div>
    );
};

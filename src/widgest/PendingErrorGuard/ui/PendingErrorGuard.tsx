import React from "react";
import { Skeleton } from "antd";
import styles from "./PendingErrorGuard.module.scss";

interface PendingErrorGuardProps {
    isLoading: boolean;
    title: string;
    error?: string,
}

export const PendingErrorGuard: React.FC<PendingErrorGuardProps> = (props) => {
    const {
        isLoading, title, error, children,
    } = props;

    if (isLoading) {
        return <div className={styles.container}><Skeleton active paragraph={{ rows: 10 }} /></div>;
    }

    return (
        <div className={styles.container}>
            {isLoading ? (
                <div className={styles.container}><Skeleton active paragraph={{ rows: 10 }} /></div>
            ) : error !== null ? (
                // TODO: убрать перед деплоем!
                <div>{children}</div>
                // <p className={styles.errorText}>{title}</p>
            ) : (
                <div>{children}</div>
            )}
        </div>
    );
};

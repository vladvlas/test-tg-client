import React from "react";

import styles from "./Stub.module.scss";

interface StubWarningProps {
    show: boolean;
    text: string;
}

export const Stub: React.FC<StubWarningProps> = (props) => {
    const { show, text, children } = props;
    return <div>{show ? <div className={styles.container}>{text}</div> : children}</div>;
};

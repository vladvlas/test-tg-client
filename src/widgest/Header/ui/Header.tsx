import React, { ReactNode } from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
    children: ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { children } = props;

    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

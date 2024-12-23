import React from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate } from "react-router-dom";
import { ProfileCard } from "entities/Profile";
import styles from "./ProfilePage.module.scss";

export const ProfilePage: React.FC = () => {
    const userAuthData = useSelector(getUserAuthData);

    return (
        <div className={styles.container}>
            <ProfileCard />
        </div>
    );
};

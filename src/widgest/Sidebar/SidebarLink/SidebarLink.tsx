import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SidebarLink.module.scss";

interface SidebarLinkProps {
    path: string;
    title: string;
}

export const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
    const { path, title } = props;

    return (
        <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.link)}
            to={path}
        >
            {title}
        </NavLink>
    );
};

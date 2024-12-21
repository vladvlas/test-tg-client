import React from "react";
import { DissertationStatus } from "entities/DissertationFile/model/types/dissertationFile";
import styles from "./StatusViewer.module.scss";

interface StatusViewerProps {
    type: DissertationStatus,
}

export const StatusViewer: React.FC<StatusViewerProps> = (props) => {
    const { type } = props;

    const setColor = (type: DissertationStatus) => {
        let color;

        switch (type) {
        case DissertationStatus.NOTVIEWED:
            color = "#999999";
            break;
        case DissertationStatus.VIEWED:
            color = "#4183C4";
            break;
        case DissertationStatus.EDITS:
            color = "#D9544F";
            break;
        case DissertationStatus.APPROVED:
            color = "#00A65A";
            break;
        }

        return color;
    };

    return (
        <div className={styles.container} style={{ backgroundColor: setColor(type) }}>
            {type}
        </div>
    );
};

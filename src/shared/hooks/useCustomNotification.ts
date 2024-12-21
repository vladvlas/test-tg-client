import { notification } from "antd";
import React from "react";

export const useCustomNotification = (): [
    contextHolder: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
    openNotification: (message: string, description: string, type: string) => void,

] => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (message: string, description: string, type: string) => {
        api.open({
            message,
            description,
            className: "custom-class",
            style: {
                width: 600,
            },
            // @ts-ignore
            type,
            //TODO: сделать enum
        });
    };

    return [contextHolder, openNotification];
};

import React, { useCallback, useEffect } from "react";
import { Checkbox, InputNumber, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd/lib";
import {
    getOrderingCertificateIsLoading,
} from "features/OrderCertificate/model/selectors/getOrderingCertificateIsLoading";
import {
    getOrderingCertificateError,
} from "features/OrderCertificate/model/selectors/getOrderingCertificateError";
import {
    getOrderingCertificateSpaceRequirement,
} from "features/OrderCertificate/model/selectors/getOrderingCertificateSpaceRequirement";
import {
    getOrderingCertificateCount,
} from "features/OrderCertificate/model/selectors/getOrderingCertificateCount";
import {
    getOrderingCertificateNeedOfficialSeal,
} from "features/OrderCertificate/model/selectors/getOrderingCertificateNeedOfficialSeal";
import { orderingCertificateActions } from "features/OrderCertificate";
import { getUserAuthData } from "entities/User";
import { orderCertificate } from "features/OrderCertificate/model/services/orderCertificate/orderCertificate";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import { getOrderingCertificateSuccess } from "features/OrderCertificate/model/selectors/getOrderingCertificateSuccess";
import styles from "./OrderCertificateModal.module.scss";

interface OrderCertificateModalProps {
    open: boolean;
    handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const OrderCertificateModal: React.FC<OrderCertificateModalProps> = (props) => {
    const { open, handleOk, handleCancel } = props;
    const dispatch = useDispatch();

    const isLoading = useSelector(getOrderingCertificateIsLoading);
    const error = useSelector(getOrderingCertificateError);
    const success = useSelector(getOrderingCertificateSuccess);
    const spaceRequirement = useSelector(getOrderingCertificateSpaceRequirement);
    const count = useSelector(getOrderingCertificateCount);
    const needOfficialSeal = useSelector(getOrderingCertificateNeedOfficialSeal);
    const userId = useSelector(getUserAuthData).id;

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при оправке запроса", "error");
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            openNotification("Успешно", "Запрос успешно отправлен", "success");
        }
    }, [success]);

    const setSpaceRequirement = useCallback((value: string) => {
        dispatch(orderingCertificateActions.setSpaceRequirement(value));
    }, [dispatch]);

    const setCount = useCallback((value: number) => {
        dispatch(orderingCertificateActions.setCount(value));
    }, [dispatch]);

    const setNeedOfficialSeal = useCallback((value: boolean) => {
        dispatch(orderingCertificateActions.setOfficialSeal(value));
    }, [dispatch]);

    const orderCertificateHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await dispatch(orderCertificate({
            userId, spaceRequirement, count, needOfficialSeal,
        }));
        handleOk(event);
    };

    return (
        <Modal
            open={open}
            onOk={orderCertificateHandler}
            onCancel={handleCancel}
            width={600}
            okText={"Заказать"}
            cancelText={"Отменить"}
            confirmLoading={isLoading}
        >
            <div className={styles.container}>
                {contextHolder}
                <div className={styles.record}>
                    <p className={styles.title}>{"Место требования: "}</p>
                    <Input value={spaceRequirement} onChange={(value) => setSpaceRequirement(value.target.value)} />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Количество: "}</p>
                    <InputNumber
                        value={count}
                        onChange={(value) => setCount(value)}
                        min={1}
                        max={4}
                    />
                </div>
                <div className={styles.record}>
                    <p className={styles.title}>{"Гербовая печать: "}</p>
                    <Checkbox
                        checked={needOfficialSeal}
                        onChange={(value) => setNeedOfficialSeal(value.target.checked)}
                        className={"checkbox"}
                    />
                </div>
            </div>
        </Modal>
    );
};

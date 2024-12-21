import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginByUsername } from "features/AuthByUserName/services/loginByUsername/loginByUsername";
import { Button, Input } from "antd";
import { loginActions } from "features/AuthByUserName";
import { getLoginState } from "features/AuthByUserName/model/selectors/geLoginState/getLoginState";
import { useCustomNotification } from "shared/hooks/useCustomNotification";
import styles from "./LoginForm.module.scss";

export const LoginForm: React.FC = memo(() => {
    const dispatch = useDispatch();

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const [contextHolder, openNotification] = useCustomNotification();

    useEffect(() => {
        if (error) {
            openNotification("Ошибка", "Ошибка при попытке авторизации", "error");
        }
    }, [error]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={styles.constainer}>
            {contextHolder}
            <div className={styles.content}>
                <p className={styles.descripthon}>{"Логин"}</p>
                <Input placeholder={"Введите логин"} onChange={(value) => onChangeUsername(value.target.value)} />
                <p className={styles.descripthon}>{"Пароль"}</p>
                <Input.Password
                    className={styles.input}
                    placeholder={"Введите  пароль"}
                    onChange={(value) => onChangePassword(value.target.value)}
                />
                <Button className={styles.button} type={"primary"} onClick={onLoginClick} loading={isLoading}>{"Войти"}</Button>
            </div>
        </div>
    );
});

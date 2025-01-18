import React from "react";
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { BalanceCard } from "entities/Balance";
import { DeviceList } from "entities/Device";
import styles from "./App.module.scss";
import InviteFriendIcon from "../shared/assets/images/user.svg";
import InstructionIcon from "../shared/assets/images/password.svg";

export const App = () => {
    return (
        <div className={"app"}>
            <div className="app-wrapper">
                <div className={styles.contentPage}>
                    <div className={styles.top}>
                        <div className="header-info">
                            Пробный период: 2 дня
                        </div>
                        <BalanceCard/>
                        <div className="devices">
                            <div className="wrapper">
                                <div className={styles.list}>
                                    <DeviceList />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.bottomWraper}>
                            <div className={styles.inviteFriendsBlock}>
                                <div className={styles.content}>
                                    <div className={styles.inviteIcon}>
                                        <div className={styles.icon}>
                                            <InviteFriendIcon />
                                        </div>
                                    </div>
                                    <div className={styles.inviteFriendsInfo}>
                                        <div className={styles.infoTitle}>
                                            Пригласить друзей
                                        </div>
                                        <div className={styles.infoDescription}>
                                            Добавим 50 ₽ на баланс за каждого
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inviteFriendsBlock}>
                                <div className={styles.content}>
                                    <div className={styles.inviteIcon}>
                                        <div className={styles.icon}>
                                            <InstructionIcon />
                                        </div>
                                    </div>
                                    <div className={styles.inviteFriendsInfo}>
                                        <div className={styles.infoTitle}>
                                            Инструкции
                                        </div>
                                        <div className={styles.infoDescription}>
                                            Настройки на разных платформах
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div content={styles.questions}>
                                <div className={styles.questionsDescriptions}>
                                    Остались вопросы?
                                    <span>Ответы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
};

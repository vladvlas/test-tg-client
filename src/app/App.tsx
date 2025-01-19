import React, { useState } from "react";
import "./styles/index.scss";
import { AppRouter } from "app/providers/router";
import { BalanceCard } from "entities/Balance";
import { DeviceList } from "entities/Device";
import styles from "./App.module.scss";
import InviteFriendIcon from "../shared/assets/images/user.svg";
import InstructionIcon from "../shared/assets/images/password.svg";
import { BottomSheet } from "react-spring-bottom-sheet";

export const App = () => {

    const [open, setOpen] = useState(false);

    const onDismiss = () => {
        setOpen(false);
    }


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
                                    <span onClick={() => setOpen(true)}>Ответы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AppRouter/>
                </div>
            </div>
            <BottomSheet open={open} onDismiss={onDismiss}>
                <div className={styles.background}>
                        {/*<SheetContent stack py={5}>*/}
                    {/*    <Box pb={5} px={4}>*/}
                    {/*        Just as with content, if the header or footer changes their height the*/}
                    {/*        sheet will readjust accordingly.*/}
                    {/*    </Box>*/}

                    {/*    <Expandable title={<>Putting the "Done" button …</>}>*/}
                    {/*        … in a sticky footer is a nice touch on long bottom sheets with a lot of*/}
                    {/*        content. And on resize events the sticky elements are always visible,*/}
                    {/*        unlike the "Dismiss" button in the first example that needs to be animated*/}
                    {/*        first.*/}
                    {/*    </Expandable>*/}

                    {/*    <Text pb={5} px={4}>*/}
                    {/*        When you provide a header the draggable area increases, making it easier*/}
                    {/*        for users to adjust the height of the bottom sheet.*/}
                    {/*    </Text>*/}

                    {/*    <Text pb={5} px={4}>*/}
                    {/*        The same is true for a sticky footer, as it supports drag gestures as well*/}
                    {/*        to optimize for large phones where the header might be difficult to reach*/}
                    {/*        with one hand.*/}
                    {/*    </Text>*/}

                    {/*    <Expandable title={<>Additionally, this bottom sheet …</>}>*/}
                    {/*        … uses stable viewpoints that are equivalent to vh CSS units. Predictable*/}
                    {/*        heights like this is also handy if there's content loaded async, or you're*/}
                    {/*        implementing a virtual list so the sheet can't rely on measuring the*/}
                    {/*        height of its content.*/}
                    {/*    </Expandable>*/}
                    {/*</SheetContent>*/}
                </div>
            </BottomSheet>
        </div>
    );
};

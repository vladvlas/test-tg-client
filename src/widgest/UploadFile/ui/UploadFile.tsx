import React, { useRef } from "react";
import { batch, useDispatch } from "react-redux";
import { Button } from "antd";
import styles from "./UploadFile.module.scss";

interface UploadFileProps {
    setFileContent: (payload?: number[]) => { payload: number[]; type: string };
    setFileName?: (payload?: string) => { payload: string; type: string };
    setLastModification?: (payload?: Date) => { payload: Date; type: string };
    setSize?: (payload?: number) => { payload: number; type: string };
    setType?: (payload?: string) => { payload: string; type: string };
}

export const UploadFile: React.FC<UploadFileProps> = (props) => {
    const {
        setFileName, setLastModification, setFileContent, setSize, setType,
    } = props;
    const filePicker = useRef(null);

    const dispatch = useDispatch();

    function fileToByteArray(file: File): Promise<number[]> {
        return new Promise((resolve, reject) => {
            try {
                const reader = new FileReader();
                const fileByteArray: string[] = [];
                reader.readAsArrayBuffer(file);
                reader.onloadend = (evt) => {
                    if (evt.target.readyState == FileReader.DONE) {
                        const arrayBuffer = evt.target.result;
                        // @ts-ignore
                        const array = new Uint8Array(arrayBuffer);
                        // @ts-ignore
                        // eslint-disable-next-line no-restricted-syntax
                        for (const byte of array) {
                            fileByteArray.push(byte);
                        }
                    }
                    // @ts-ignore
                    resolve(fileByteArray);
                };
            } catch (e) {
                reject(e);
            }
        });
    }

    const handleChange = async (event: any) => {
        const file = (event.target as HTMLInputElement).files[0];
        const coddingFile = await fileToByteArray(file);
        batch(() => {
            dispatch(setFileContent(coddingFile));
            dispatch(setFileName(file.name));
            dispatch(setLastModification(new Date(file.lastModified)));
            dispatch(setType(file.type));
            dispatch(setSize(file.size));
        });
    };

    const handlePick = () => {
        filePicker.current.click();
    };

    return (
        <div className={styles.container}>
            <Button type={"primary"} onClick={handlePick}>{"Добавить новый файл"}</Button>
            <input ref={filePicker} className={styles.hidden} type={"file"} onChange={(e) => handleChange(e)} />
        </div>
    );
};

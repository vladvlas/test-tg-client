import { Patent } from "entities/Patent";
import { FileWithContent } from "shared/types/FileWithContent";

export interface EditingPatentFile extends Patent {
    file?: FileWithContent;
}

export interface EditingPatentFileSchema {
    data: EditingPatentFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

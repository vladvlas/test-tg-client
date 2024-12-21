import { Patent } from "entities/Patent";
import { FileWithContent } from "shared/types/FileWithContent";

export interface AddingPatentFile extends Patent {
    file?: FileWithContent;
}

export interface AddingPatentFileSchema {
    data: AddingPatentFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

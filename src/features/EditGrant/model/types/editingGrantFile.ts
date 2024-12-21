import { Grant } from "entities/Grant";
import { FileWithContent } from "shared/types/FileWithContent";

export interface EditingGrantFile extends Grant {
    file?: FileWithContent;
}

export interface EditingGrantFileSchema {
    data: EditingGrantFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

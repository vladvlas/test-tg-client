import { Grant } from "entities/Grant";
import { FileWithContent } from "shared/types/FileWithContent";

export interface AddingGrantFile extends Grant {
    file?: FileWithContent;
}

export interface AddingGrantFileSchema {
    data: AddingGrantFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

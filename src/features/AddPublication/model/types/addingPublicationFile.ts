import { Publication } from "entities/Publication";
import { FileWithContent } from "shared/types/FileWithContent";

export interface AddingPublicationFile extends Publication {
    file?: FileWithContent;
}

export interface AddingPublicationFileSchema {
    data: AddingPublicationFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

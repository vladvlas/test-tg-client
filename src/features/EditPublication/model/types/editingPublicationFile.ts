import { Publication } from "entities/Publication";
import { FileWithContent } from "shared/types/FileWithContent";

export interface EditingPublicationFile extends Publication {
    file?: FileWithContent;
}

export interface EditingPublicationFileSchema {
    data: EditingPublicationFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

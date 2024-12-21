import { Competition } from "entities/Competition";
import { FileWithContent } from "shared/types/FileWithContent";

export interface AddingCompetitionFile extends Competition {
    file?: FileWithContent;
}

export interface AddingCompetitionFileSchema {
    data: AddingCompetitionFile,
    isLoading: boolean,
    error?: string,
    success?: boolean
}

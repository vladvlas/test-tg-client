import { Competition } from "entities/Competition";
import { FileWithContent } from "shared/types/FileWithContent";

export interface EditingCompetitionFile extends Competition {
    file?: FileWithContent;
}

export interface EditingCompetitionFileSchema {
    data: EditingCompetitionFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

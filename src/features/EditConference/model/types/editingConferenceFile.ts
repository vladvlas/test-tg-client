import { Conference } from "entities/Conference";
import { FileWithContent } from "shared/types/FileWithContent";

export interface EditingConferenceFile extends Conference {
    file?: FileWithContent;
}

export interface EditingConferenceFileSchema {
    data: EditingConferenceFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

import { Conference } from "entities/Conference";
import { FileWithContent } from "shared/types/FileWithContent";

export interface AddingConferenceFile extends Conference {
    file?: FileWithContent;
}

export interface AddingConferenceFileSchema {
    data: AddingConferenceFile,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

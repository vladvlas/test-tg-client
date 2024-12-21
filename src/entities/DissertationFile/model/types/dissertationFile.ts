// Тип для карточки о защите диссертации
import { FileWithContent } from "shared/types/FileWithContent";

//  Enum для статусов диссертации
export enum DissertationStatus {
    VIEWED = "Просмотрено",
    NOTVIEWED = "Не просмотрено",
    APPROVED = "Одобрено",
    EDITS = "Правки",
}

export interface DissertationFile {
    id: string,
    // Дата защиты
    defenseDate: string,
    // Допущен ли к защите
    isAdmitted: boolean,

    userId: string,
    // Файл с диссертацией
    file?: FileWithContent,
    // Статус диссертации: Не просмотрено, Просмотрено, Правки, Одобрено
    status?: DissertationStatus,
}

export interface DissertationFileSchema {
    data?: DissertationFile,
    isLoading: boolean,
    isAddLoading: boolean
    error?: string,
    addError?: string,
    success?: boolean;
}

export interface Competition {
    // id конкурса
    id: string;
    // Название
    title: string;
    // Год
    year: string;
    // Результат
    result: string;
    // Вариант участия:
    userId?: string;
}

export interface CompetitionSchema {
    data?: Competition[],
    isLoading: boolean,
    error?: string,
    isDeletingLoading: boolean;
    deletingError?: string;
    deletingSuccess?: boolean;
}

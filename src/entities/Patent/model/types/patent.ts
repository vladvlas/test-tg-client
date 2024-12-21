export interface Patent {
    // id патента
    id: string;
    // Название
    title: string;
    // Дата выдачи
    date: string;
    userId?: string;
}

export interface PatentSchema {
    data?: Patent[],
    isLoading: boolean,
    error?: string,
    isDeletingLoading: boolean;
    deletingError?: string;
    deletingSuccess?: boolean;
}

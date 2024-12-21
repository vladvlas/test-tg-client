export interface Conference {
    // id конференции
    id: string;
    // Название
    title: string;
    // Год
    year: string;
    // Уровень
    level: string;
    // Вариант участия:
    participationOption: string;
    // Консультант
    isWin: boolean;
    userId?: string;
}

export interface ConferenceSchema {
    data?: Conference[],
    isLoading: boolean,
    error?: string,
    isDeletingLoading: boolean;
    deletingError?: string;
    deletingSuccess?: boolean;
}

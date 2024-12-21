export interface Grant {
    // id патента
    id: string;
    // Название
    title: string;
    // Участие: Участник, Грантодержатель
    participation: string;
    userId?: string;
}

export interface GrantSchema {
    data?: Grant[],
    isLoading: boolean,
    error?: string,
    isDeletingLoading: boolean;
    deletingError?: string;
    deletingSuccess?: boolean;
}

export interface Publication {
    // id публикации
    id: string;
    // Название
    title: string;
    // Год
    year: string;
    // Тип статьи: несколько видов, потом сделаю enum
    publicationType: string;
    // Издание
    edition: string;
    // Консультант
    consultant: string;
    userId?: string;
}

export interface PublicationSchema {
    data?: Publication[],
    isLoading: boolean,
    error?: string,
    isDeletingLoading: boolean;
    deletingError?: string;
    deletingSuccess?: boolean;
}

export interface Certification {
    // id конференции
    id: string;
    // Семестр
    semester: string;
    // Результат
    result: boolean;
    userId: string;
}

export interface CertificationSchema {
    data?: Certification[],
    isLoading: boolean,
    error?: string,
}

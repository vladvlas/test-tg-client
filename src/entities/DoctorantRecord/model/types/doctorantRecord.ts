export interface DoctorantRecord {
    id: string,
    surname: string;
    name: string;
    patronymic: string;
    faculty: string;
    department: string;
    userId: string;
}

export interface DoctorantRecordSchema {
    data: DoctorantRecord[],
    isLoading: boolean,
    searchString: string,
    error?: string,
}

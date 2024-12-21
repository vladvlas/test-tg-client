export interface AdviserRecord {
    id: string,
    surname: string;
    name: string;
    patronymic: string;
    faculty: string;
    department: string;
    academicDegree: string;
    userId: string;
}

export interface AdviserRecordSchema {
    data: AdviserRecord[],
    isLoading: boolean,
    searchString: string,
    error?: string,
}

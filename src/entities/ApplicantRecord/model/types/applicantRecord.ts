export interface ApplicantRecord {
    id: string,
    surname: string;
    name: string;
    patronymic: string;
    faculty: string;
    department: string;
    userId: string;
}

export interface ApplicantRecordSchema {
    data: ApplicantRecord[],
    isLoading: boolean,
    searchString: string,
    error?: string,
}

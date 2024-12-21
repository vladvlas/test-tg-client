export interface AspirantRecord {
    id: string,
    groupNumber: string,
    surname: string;
    name: string;
    patronymic: string;
    faculty: string;
    department: string;
    class: string;
    userId: string;
}

export interface AspirantRecordSchema {
    data: AspirantRecord[],
    isLoading: boolean,
    searchString: string,
    error?: string,
}

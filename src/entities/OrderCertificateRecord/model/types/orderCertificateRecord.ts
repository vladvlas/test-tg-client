export interface OrderCertificateRecord {
    id: string;
    userName: string;
    number: number,
    applicationDate: string,
    spaceRequirement: string,
    count: number,
    needOfficialSeal: true,
    userId: string,
}

export interface OrderCertificateRecordSchema {
    data: OrderCertificateRecord[],
    isLoading: boolean,
    isIssueLoading: boolean,
    error?: string,
    issueError?: string,
    success?: boolean,
}

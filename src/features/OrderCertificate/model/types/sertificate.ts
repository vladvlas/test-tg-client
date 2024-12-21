export interface OrderingCertificate {
    spaceRequirement: string,
    count: number,
    needOfficialSeal: boolean,
}

export interface OrderingCertificateSchema {
    data: OrderingCertificate,
    isLoading: boolean,
    error?: string,
    success?: boolean,
}

export interface Device {
    id: string;
    // Имя
    name: string;
    // Тариф
    // TODO: придумать, в каком будет приходить информация о тарифе
    tariff: number;
    // Статус
    status: boolean;
}

export interface DevicesSchema {
    data?: Device[];
    isLoading: boolean;
    error?: string;
}
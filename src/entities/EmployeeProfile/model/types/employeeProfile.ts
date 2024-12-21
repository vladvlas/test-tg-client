// Сделал все строкой, чтобы было проще, потом можно переделать
export interface EmployeeProfile {
    userId: string;
    // Фамилия
    surname: string;
    // Имя
    name: string;
    // Отчество
    patronymic: string;
    // Номер телефона
    phoneNumber: string,
    // Почта
    email: string,
    // Должность
    position: string,
}

export interface EmployeeProfileSchema {
    data?: EmployeeProfile,
    isLoading: boolean,
    error?: string,
}

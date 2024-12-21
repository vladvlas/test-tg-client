export interface Adviser {
    id: string;
    // Фамилия
    surname: string;
    // Имя
    name: string;
    // Отчество
    patronymic: string;
    // Дата рождения
    birthday: string;
    // Факультет
    faculty: string;
    // Кафедра
    department: string;
    // Ученая степень
    academicDegree: string;
    // Шифр специальности
    specialtyCode: string;
    // Ученая степень
    academicRank: string;
    userId: string;
}

export interface AdviserSchema {
    data?: Adviser;
    isLoading: boolean;
    error?: string;
}

// Сделал все строкой, чтобы было проще, потом можно переделать
export interface Profile {
    userId: string,
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
    // Направление
    direction: string;
    // Номер группы
    groupNumber: string;
    // Тип обучения: аспирант, докторант, соискатель
    educationType: string;
    // Форма обучения: очная, заочная
    educationForm: string;
    // Бюджетник или платник
    isBudget: boolean;
    // Курс: 1, 2, 3
    class: string;
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
}

export enum ProfileTitles {
    SURNAME = "Фамилия",
    NAME = "Имя",
    PATRONYMIC = "Отчество",
    BIRTHDAY = "Дата рождения",
    FACULTY = "Факультет",
    DEPARTMENT = "Кафедра",
    DIRECTION = "Направление",
    GROUPNUMBER = "Номер группы",
    EDUCATIONTYPE = "Тип обучения",
    EDUCATIONFORM = "Форма обучения",
    ISBUDGET = "Бюджет",
    CLASS = "Курс",
}

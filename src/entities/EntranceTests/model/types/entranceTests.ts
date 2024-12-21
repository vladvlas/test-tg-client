export interface EntranceTest {
    title: string,
    grade: string,
    userId: string,
}

export interface EntranceTestSchema {
    data: EntranceTest[],
    isLoading: boolean,
    error?: string,
}

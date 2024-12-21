export interface FileWithContent {
    name: string,
    lastModification: Date,
    size: number,
    type: string,
    content?: number[],
}

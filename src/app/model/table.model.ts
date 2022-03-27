export enum TableStatus {
    clean = 'clean',
    replace = 'replace',
    dirty = 'dirty'
}

export interface TableData {
    name: string;
    status: TableStatus
}
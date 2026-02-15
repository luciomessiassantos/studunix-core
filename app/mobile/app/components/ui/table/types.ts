import { ReactNode } from "react";

export type Column<T> = {
    key: keyof T;
    label: string
    width?: string | number
    render?: (value: any, row: T) => ReactNode
}


export type TableProps<T> = {
    data: T[],
    columns: Column<T>[];
    keyExtractor: (item: T) => string;
    onRowPress?: (row: T) => void;
    loading?: boolean;
    emptyText?: string;
}





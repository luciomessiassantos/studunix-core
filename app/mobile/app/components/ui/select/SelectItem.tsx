import { createContext, ReactNode, useContext, useState } from "react"


interface SelectComponentProps {
    selected: string | null
    onSelect: (value: string) => void
}

const SelectContext = createContext<SelectComponentProps | undefined>(undefined);

export function usePicker() {
    const ctx = useContext(SelectContext);
    if (!ctx) throw new Error("O hook só deve ser utilizado dentro do provider");
    return ctx;
}

type SelectProps = {
    children: ReactNode
    value?: string
    onChange: (value: string) => void
}


export default function Select({ children, value, onChange }: SelectProps) {

    const [internal, setInternal] = useState<string | null>(value ?? null);

    const selected = value ?? internal;

    const onSelect = (v: string) => {
        if (!value) setInternal(v);

        onChange?.(v);
    }

    return (
        <SelectContext.Provider value={{selected, onSelect}} >
            {children}
        </SelectContext.Provider>
    )
}

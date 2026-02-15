import { Column } from "@/app/components/ui/table/types";
import { Assignment, GradesResponse, TFIle } from "../types/Application";
import Badge from "@/app/components/Badge";
import React from "react";
import { formatBytes } from "../utils/FileUtils";


export const gradesColumnDef: Column<GradesResponse>[] = [
    {
        key: "firstGrade",
        label: "1° Estágio"
    },
    {
        key: "secondGrade",
        label: "2° Estágio"
    },
    {
        key: "thirdGrade",
        label: "3° Estágio"
    },
    {
        key: "repo",
        label: "Reposição"
    },
    {
        key: "final",
        label: "Final"
    },
    {
        key: "misses",
        label: "Faltas"
    }
]


export const AssignmentColumnDef: Column<Assignment>[] = [
    {
        key: "title", label: "Título"
    },
    {
        key: "points", label: "Pontuação"
    },
    {
        key: "tries", label: "Tentativas"
    },
    {
        key: "deadline", label: "Limite",
        render: (value, row) => (
            row.deadline.toLocaleDateString("pt-BR", {
                day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
            })
        )
    },
    {
        key: "created_at", label: "Criação",
        render: (value, row) => (
            row.created_at.toLocaleDateString("pt-BR", {
                day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
            })
        )
    }
]


export const AssignmentDetailColumnDef: Column<Assignment>[] = [
    {
        key: "points", label: "Pontuação"
    },
    {
        key: "tries", label: "Tentativas"
    },
    {
        key: "state", label: 'Situação',
        render: (value, row) => {
            const state = row.state;
            return (
            <Badge style={{ paddingHorizontal: 20, paddingVertical: 8}} label={state == "Pending" ? "Pendente" : state == "Done" ? "Finalizada" : "Expirada"} color={state == 'Pending' ? "pastelYellow" : state == "Done" ? "pastelGreen" : "pastelRed"} />
        )
        }
    }, 
    {
        key: "deadline", label: "Limite",
        render: (value, row) => (
            row.deadline.toLocaleDateString("pt-BR", {
                day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
            })
        )
    },
    {
        key: "created_at", label: "Criação",
        render: (value, row) => (
            row.created_at.toLocaleDateString("pt-BR", {
                day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'
            })
        )
    }
]


export const FileColumnDef: Column<TFIle>[] = [
    {
        key: "name", label: "Nome",
        render: (value, row) => <span>{row.name}.{formatBytes(row.size_bytes, 2)}</span>
    }
]
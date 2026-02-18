import { ColumnDef } from "~/shared/components/data-table/types";
import { AssignmentProfessor } from "../../shared/types.dto";

export const ASSIGNMENT_COLUMNS: ColumnDef<AssignmentProfessor>[] = [
    {
        id: "c1",
        accessor: 'title',
        header: "Título",
    },
    {
        id: "c2",
        accessor: 'period',
        header: "Período",
    },
    {
        id: "c3",
        accessor: 'submissionsQuantity',
        header: "Submissões",
    },
    {
        id: "c4",
        accessor: 'state',
        header: "Situação",
        
    },
]

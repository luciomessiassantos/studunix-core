import variables, { flexRow, flexRowCenter } from "@/shared/utils/styleVariables"
import { Column } from "../table/types"
import { View, Text, FlatList } from 'react-native'
import TableHead from "../table/TableHead"
import TableRow from "../table/TableRow"
import VerticalTableRow from "./VerticalTableRow"

type VerticalTableProps<T> = {
    data: T
    columns: Column<T>[]
    keyExtractor: (item: T) => string
}

export default function VerticalTable<T>({
    data, columns, keyExtractor
}: VerticalTableProps<T>) {
  return (
    <View style={{
        ...flexRow,
        width: '100%',
        gap: 20
    }}>
      <FlatList
      contentContainerStyle={{}}
      data={columns}
      keyExtractor={(t) => String(t.key)}
      renderItem={({item}) => (
        <TableHead style={{ width: "100%", height: 48, marginLeft: 10, ...flexRowCenter, justifyContent: 'flex-start'

         }}>
            <Text style={{fontFamily: "Inter-Medium", fontSize: 14}}>{item.label}</Text>
        </TableHead>
      )}  
      />

      <VerticalTableRow 
        row={data}
        columns={columns}
      />
    </View>
  )
}


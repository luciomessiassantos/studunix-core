

import { View, Text } from 'react-native'
import TableCell from './TableCell'
import { Column } from './types'
import variables from '@/shared/utils/styleVariables'

export default function TableHeader<T>(
{
        columns
    } : { columns: Column<T>[]}
) {
  return (
    <View style={{
        display: 'flex', flexDirection: 'row', width: '100%', paddingVertical: 14,
        borderBottomWidth: 1, borderBottomColor: variables.colors["defaultStroke/50"]
        
    }}>
        {
            columns.map((c) => (
                <TableCell>
                    <Text>{c.label}</Text>
                </TableCell>
            ))
        }
    </View>
  )
}
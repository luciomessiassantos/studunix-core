

import { View, Text } from 'react-native'
import React from 'react'
import { Column } from '../table/types'
import TableCell from '../table/TableCell'
import variables from '@/shared/utils/styleVariables'

type VerticalTableRowProps<T> = {
    row: T
    columns: Column<T>[],
    onPress?: (row: T) => void,
}

export default function VerticalTableRow<T>({
    row, columns, onPress, 
}: VerticalTableRowProps<T>) {

  return (
    <View style={{minWidth: 200}}>
      {
        columns.map((c) => {
            const value = row[c.key];
            return <TableCell key={String(c.key)}><Text style={{fontFamily: "Inter"}}>{c.render ? c.render(value, row) : value ? String(value) : '-'}</Text></TableCell>
        })
      }
    </View>
  )
}


import { View, Text } from 'react-native'
import React from 'react'
import { Column } from './types'
import TableCell from './TableCell'

type TableRowProps<T> = {
    row: T
    columns: Column<T>[],
    onPress?: (row: T) => void
}

export default function TableRow<T>({
    row, columns, onPress
}: TableRowProps<T>) {
  return (
    <View>
      {
        columns.map((c) => {
            const value = row[c.key];
            return <TableCell key={String(c.key)}><Text style={{fontFamily: "Inter"}}>{c.render ? c.render(value, row) : String(value)}</Text></TableCell>
        })
      }
    </View>
  )
}
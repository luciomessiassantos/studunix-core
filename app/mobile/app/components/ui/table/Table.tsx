


import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { TableProps } from './types'
import TableHead from './TableHead';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export default function Table<T>(
    {
        data, columns,
        keyExtractor, onRowPress,
        loading,
        emptyText = "Sem resultados"
    } : TableProps<T>
) {

    if (loading) return null;




  return (
    <View>
      <TableHeader columns={columns} />
      <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <TableRow
        row={item}
        columns={columns}
        onPress={onRowPress}
        />
      )}
      />
    </View>
  )
}
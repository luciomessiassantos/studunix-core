

import { View, Text, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { Column } from './types'
import TableCell from './TableCell'
import { flexRow } from '@/shared/utils/styleVariables'

type TableHeadProps = {
    children: ReactNode
    style?: ViewStyle
}


export default function TableHead<T>(
    {
        children, style
    } : TableHeadProps
) {
  return (
    <View style={[{
        ...flexRow, 
        minWidth: 40,
    }, style]}>
        {children}
    </View>
  )
}
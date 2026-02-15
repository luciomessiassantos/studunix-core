

import { View, Text, ViewStyle, DimensionValue } from 'react-native'
import React, { ReactNode } from 'react'
import variables, { flexRowCenter } from '@/shared/utils/styleVariables'

export default function TableCell({ children, style, width }: { children?: ReactNode, style?: ViewStyle, width?: DimensionValue }) {
  return (
    <View style={[{
        minWidth: 85,
        width: width ? width : 'auto',
        minHeight: 48,
        ...flexRowCenter, justifyContent: 'flex-start', paddingHorizontal: 16
    }, style]}>
        {children}
    </View>
  )
}
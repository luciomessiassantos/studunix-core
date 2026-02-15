
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import variables from '../utils/styleVariables'

type CardProps = {
    style?: StyleProp<ViewStyle>
    children?: ReactNode
}

export default function Card({
    style, children
}: CardProps) {
  return (
    <View style={[def.card, style]}>
        {children}
    </View>
  )
}

const def = StyleSheet.create({
    card: {
        minWidth: 10,
        minHeight: 20,
        borderRadius: 18,
    }
})

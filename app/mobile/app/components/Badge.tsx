
import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import variables, { flexRow, flexRowCenter, fontNormal, fontSemiBold } from '@/shared/utils/styleVariables'
import { CommomColors } from '@/shared/types/Client'

type BadgeProps = {
    label: string
    color: CommomColors | "Outline"
    style?: ViewStyle
}

export default function Badge({ label, color, style }: BadgeProps) {
  return (
    <View style={{ ...style, ...flexRowCenter, borderRadius: 10, padding: 10,
    backgroundColor: color == "Outline" ? 'white' : variables.colors[`${color}/20`],
    outlineWidth: color == 'Outline' ? 1 : 0, outlineColor: variables.colors["mute/50"]
    }}>
      <Text style={{...fontSemiBold, color: color == "Outline" ? 'black' : variables.colors[color], fontSize: 12}}>{label}</Text>
    </View>
  )
}


import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import variables from '@/shared/utils/styleVariables'

type AssignCardProps = {
    id: string,
    title: string
    details: string
    date: Date
}

export default function AssignCard({ id, title, details, date } : AssignCardProps) {
  return (
    <TouchableOpacity key={id} style={{
        width: "80%",
        backgroundColor: variables.colors["pastelRed/10"],
        borderRadius: 12,
        padding: 12,
        borderLeftWidth: 5,
        borderLeftColor: variables.colors["pastelRed"]
    }}>
      <View style={{
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
         
      }}>
        <Text style={{fontFamily: "Inter-SemiBold"}}>
            {title}
        </Text>
        <Text style={{fontFamily: "Inter-Medium"}}>
            {date.toLocaleDateString("pt-BR", {
                day: 'numeric',
                month: 'long',
                hour: "numeric",
                minute: "numeric"
            })}
        </Text>
      </View>

      <View style={{
        width: "100%",
        minHeight: "50%",
        padding: 10
      }}>
        <Text style={{fontFamily: "Inter"}}>
            {details}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
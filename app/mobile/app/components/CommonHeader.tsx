import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import variables, { defaultShadow } from '@/shared/utils/styleVariables'
import { ArrowLeftOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import { router } from 'expo-router'

export default function CommonHeader() {
  return (
    <View style={headerStyle.header}>
          <TouchableOpacity style={{
            ...defaultShadow,
            borderRadius: 50,
            backgroundColor: variables.colors.action,
            padding: 12,
            borderWidth: 1.2,
            borderColor: variables.colors["defaultStroke/20"]
          }} onPress={() => router.back()}>
            <Lineicons icon={ArrowLeftOutlined} size={28} strokeWidth={20} />
          </TouchableOpacity>
      </View>
  )
}


const headerStyle = StyleSheet.create({
    header: {
      width: "100%",
      height: "10%",
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5
    },
})
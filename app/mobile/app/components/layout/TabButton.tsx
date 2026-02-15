

import { View, Text, Pressable, Animated } from 'react-native'
import React, { ReactNode, useEffect } from 'react'
import variables from '@/shared/utils/styleVariables'
import { usePopAnimation } from '@/app/hooks/useAnimation'

type TabButtonProps = {
    icon: ReactNode
    isFocused: boolean
    onPress: () => void
    label?: string
}


export default function TabButton({ icon, isFocused, onPress, label }: TabButtonProps) {

  const { style, pop } = usePopAnimation({
    tension: 1000,
    friction: 100,
    scale: 1,
  });

  useEffect(() => {
    if (isFocused) pop();

  }, [isFocused])

  if (label && label === "Calendar") {
    return (
    <Animated.View
    style={[{
      backgroundColor: variables.colors.primary,
          borderRadius: 20,
          width: "25%",
          height: "145%",
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 40
    }, style]}
    >
      
      <Pressable
      style={[{
          
      }
      
        ]}
      onPress={onPress}
      >
          {icon}
      </Pressable>
    </Animated.View>
  )
  }
  else {
    return (
    <Pressable
    onPress={onPress}
    >
        {icon}
    </Pressable>
  )
  }
}
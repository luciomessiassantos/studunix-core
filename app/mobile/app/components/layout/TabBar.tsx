

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import variables from '@/shared/utils/styleVariables'
import TabButton from './TabButton'
import { BlurView } from "expo-blur"


export default function TabBar({ state, descriptors, navigation} : BottomTabBarProps) {
  return (
    <BlurView intensity={20} style={styles.main}>
        <View style={styles.bar} >
            {
                state.routes.map((r, i) => {
                    const isFocused = state.index === i;
                    const { options } = descriptors[r.key];
                    const label = r.name;
                    const icon = options.tabBarIcon?.({
                        focused: isFocused,
                        color: isFocused ? variables.colors.primary : variables.colors.mute,
                        size: (label === "Calendar") ? 36 : 28,
                    })
                    const onPress = () => {
                        navigation.navigate(r.name);
                    }
                    
                    return (
                        <TabButton key={r.key} icon={icon} label={label} isFocused={isFocused} onPress={onPress} />
                    );

                })
            }
        </View>
    </BlurView>
  )
}


const styles = StyleSheet.create({
    main: {
        width: "100%",  
        height: 80,
        backgroundColor: "transparent",
    
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',

        position: 'absolute',
        bottom: -10,
    },

    bar: {
        backgroundColor: 'rgb(255,255,255)',

        width: '80%',
        height: 50,
        borderRadius: 50,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 6,
    }
})
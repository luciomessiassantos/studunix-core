
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native'
import React, { useEffect } from 'react'
import variables from '@/shared/utils/styleVariables'
import { useSlideAnimation } from '@/app/hooks/useAnimation'

type Props = {
    selected: "classes" | "events"
    setSelected: (t: "classes" | "events" ) => void
}


export default function Options({ selected, setSelected } : Props) {

    const { style, slideIn } = useSlideAnimation({
        direction: selected === 'classes' ? 
        'left' : 'right',
        distance: 148,
        duration: 300
    });

    useEffect(() => {
        slideIn()
    }, [selected]);

  return (
          <Animated.View style={[styles.options]}>
            <Animated.View style={[{
                backgroundColor: variables.colors.primary,
                borderRadius: 10,
                width: "50%",
                height: 40,
                position: 'absolute',
                top: 5,
                left: 5
            }, style]} />
        <Pressable
        onPress={() => setSelected("classes")}
        style={[styles.option, selected == "classes" && {  },
            
        ]}
        >
        
        <Text
        style={selected == "classes" && { fontWeight: 500, color: 'white'}}
        >Aulas</Text>

        </Pressable>

        <Pressable
        onPress={() => setSelected("events")}
        style={[styles.option, selected == "events" && {  },
            
        ]}>

            <Text
            style={selected == "events" && { fontWeight: 500, color: 'white'}}
            >Eventos</Text>

            </Pressable>
      </Animated.View>
  )
}

const styles = StyleSheet.create({
    options: {
        width: '80%',
        height: 50,
        padding: 5,
        paddingHorizontal: 5,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: variables.colors["mute/5"],
        borderRadius: 10,
        position: 'relative'
    },
    option: {
        width: '49%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Inter",

        borderRadius: 10,
    },
    content: {
        width: "90%",
        height: 400,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 16,
    }
})

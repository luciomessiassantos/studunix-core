

import variables from '@/shared/utils/styleVariables';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function ErrorComponent({message} : {message: string}) {

    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = useCallback(() => {
        return Animated.timing(opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        });
    }, [opacity]);


    const fadeOut = useCallback(() => {
        return Animated.timing(opacity, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        });
    }, [opacity])

    

    const animate = useCallback(() => {
        Animated.sequence([
            fadeIn(),
            Animated.delay(4000),
            fadeOut()
        ]).start()
    }, [fadeIn, fadeOut])


    useEffect(() => {
        animate();
    }, [])

    const animateStyle = {
        opacity,
        transform: [{
            scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1]
            })
        }]
    }


  return (
    <Animated.View style={[style.main, animateStyle]}>
        <MaterialCommunityIcons name="alert-circle-outline" regular={true} size={24} color={variables.colors.error}/>
      <Text
      style={style.errorLabel}
      numberOfLines={2} ellipsizeMode="tail"
      >Error: {message}</Text>
    </Animated.View >
  )
}


const style = StyleSheet.create({
    main: {
        maxWidth: "90%",
        position: "absolute",
        top: "10%",
        backgroundColor: variables.colors.errorBackground,
        borderWidth: 1,
        borderColor: variables.colors.error,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 15,
        zIndex: 20,

        display: "flex",
        flexDirection: "row",
        gap: 15
    },

    errorLabel: {
        color: variables.colors.error,
        fontFamily: 'Inter-Medium',
        fontSize: 15,
        maxWidth: "90%"
    }


})
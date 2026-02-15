import { useRef } from "react"
import { Animated, Easing, ViewStyle } from "react-native"
import { style } from "../login";

interface UseSlideXAnimationProps {
    duration?: number
    distance?: number
    direction?: 'right' | 'left'
    moreStyles?: ViewStyle
}

interface UsePopAnimationProps {
    scale?: number
    tension?: number
    friction?: number
}

interface SizeUpProps {
  type?: 'width' | 'height',
  duration?: number
  startValue?: number | string,
  toValue?: number | string
}



export const useAnimation = ({
    from = 0,
    to = 1,
    duration = 200,
    useOpacity = false,
    useTranslateY = false,
}) => {

    const val = useRef(new Animated.Value(from)).current

    const start = () => {
        Animated.timing(val, {
      toValue: to,
      duration,
      useNativeDriver: true,
    }).start();
    }


    const style = {
    ...(useOpacity && { opacity: val }),
    ...(useTranslateY && {
      transform: [{ translateY: val }],
    }),
  };

  return { style, start };
}



export const useSlideAnimation = (
{
    distance = 20,
    duration = 100,
    direction = 'right',
    moreStyles = {}
} : UseSlideXAnimationProps = {}) => {

    const translateX = useRef(new Animated.Value(0)).current
    
    const slideIn = () => {
        if (direction == 'right') {
            Animated.timing(translateX, {
            toValue: distance,
            duration: duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
        return;
        }

        if (direction == 'left') {
            Animated.timing(translateX, {
            toValue: 0,
            duration: duration,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
        return;
        }
    }


  const style = {
    transform: [
      { translateX },
      
    ],
    moreStyles
  };

  return {
    style,
    slideIn,
  };
}

export const usePopAnimation = ({
    scale = 1.15,
    tension = 180,
    friction = 12
}: UsePopAnimationProps = {}) => {
    
    const scaleAim = useRef(new Animated.Value(1)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    const pop = () => {
        Animated.parallel([
            Animated.spring(scaleAim, {
                toValue: scale,
                tension,
                friction,
                useNativeDriver: true
            }),
            Animated.spring(translateY, {
                toValue: -3,
                tension,
                friction,
                useNativeDriver: true
            })
        ]).start(() => {
            Animated.parallel([
                Animated.spring(scaleAim, {
                    toValue: 1,
                    tension,
                    friction,
                    useNativeDriver: true
                }),
                Animated.spring(translateY, {
                toValue: 0.3,
                tension,
                friction,
                useNativeDriver: true
            })
            ]).start();
        })
    }

    const style = {
        transform: [
            { scale: scaleAim },
            { translateY }
        ]
    }

    return {
        style,
        pop
    }

}


export const useEnterInSlide = () => {
  const translateY = useRef(new Animated.Value(8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const enterIn = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const reset = () => {
  translateY.setValue(12);
  opacity.setValue(0);
    };

  const style = {
    opacity,
    transform: [{ translateY }],
  };

  return { style, enterIn, reset };

}

export const useEnterInSlideX = () => {
  const translateX = useRef(new Animated.Value(8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const enterIn = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const reset = () => {
  translateX.setValue(12);
  opacity.setValue(0);
    };

  const style = {
    opacity,
    transform: [{ translateX }],
  };

  return { style, enterIn, reset };

}


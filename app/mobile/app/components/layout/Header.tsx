

import Card from '@/shared/components/Card';
import variables, { defaultShadow, flexRow, fontMedium, fontNormal, fontSemiBold } from '@/shared/utils/styleVariables';
import { User4Bulk, User4Outlined } from '@lineiconshq/free-icons';
import Lineicons from '@lineiconshq/react-native-lineicons';
import { router } from 'expo-router';
import { AlertCircle, Bell } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { 
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue, 
  withSpring, 
  withTiming,
} from "react-native-reanimated"

import { Gesture, GestureDetector } from 'react-native-gesture-handler'

import Animated from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { NotificationType } from '../notification-card';
import { useNotification } from '@/app/context/NotificationContext';

export default function Header() {
    const [focused, setFocus] = useState(false);
    const { newestNotification, setNewNotification } = useNotification();
    const [newNotification, setNotification] = useState<NotificationType | undefined>(newestNotification);

    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const translateX = useSharedValue(0);


    const gesture = Gesture.Pan()
  .onUpdate((event) => {
    translateX.value = event.translationX;
    opacity.value = 1 - Math.abs(event.translationX) / 300;
  })
  .onEnd(() => {
    if (Math.abs(translateX.value) > 120) {
      translateX.value = withTiming(
        translateX.value > 0 ? 400 : -400
      );
      opacity.value = withTiming(0, {}, (finished) => {
        if(finished) {
          scheduleOnRN(setNewNotification, undefined);
          scheduleOnRN(setNotification, undefined)
        };
      });
    } else {
      translateX.value = withSpring(0);
      opacity.value = withSpring(1);
    }
  });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ 
        scale: scale.value,
        
       },
      {
        translateX: translateX.value
      }],
      opacity: opacity.value,
    }));

    useEffect(() => {
      if (newNotification) {
        scale.value = withSpring(1);
        opacity.value = withTiming(1, { duration: 200 });
      } else {
        scale.value = withTiming(0);
        opacity.value = withTiming(0);
      }
    }, [newNotification]);


  return (
    <View style={{
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: 'transparent',

        position: 'absolute',
        top: 20,
        zIndex: 100
    }}>
      <View style={{
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        position: 'relative'
      }}>
      
        <TouchableOpacity
        style={{
          borderRadius: 50,
          display: 'flex',
          flexDirection: 'row',
          alignItems: "center",
          justifyContent: 'center',
          padding: 8,
          paddingLeft: 8.5,
          backgroundColor: "white",
          ...defaultShadow,

          borderWidth: 1.2,
          borderColor: variables.colors["defaultStroke/20"]
        }}
        onPress={() => router.push("/Profile")}
        >
          <Lineicons size={32.5} icon={User4Outlined} />
        </TouchableOpacity>
        <View style={{
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 12,
            ...defaultShadow,
            borderWidth: 1.2,
          borderColor: variables.colors["defaultStroke/20"]
          }}>
            <Bell onPress={() => {
              setFocus(!focused);
              router.push("/Notifications")
              }}  stroke={variables.colors.primary}/>
          </View>
          {
            newNotification && 
              <GestureDetector gesture={gesture}>
                <Animated.View
                
                entering={FadeIn}
                exiting={FadeOut}
                style={
                  [{
                position: 'absolute',
                
                right:0,
                top: 60,
                width: "100%", borderRadius: 16,
                minHeight: 80,
                
                },
                  animatedStyle
                ]
                }>
                  <View style={{ width: "100%", borderRadius: 16, backgroundColor: variables.colors['pastelRed'], margin: 0, ...flexRow, alignItems: 'center'}}>
                    
                    <View style={{ height: '100%', padding: 12 }}>
                      <AlertCircle color={'white'} />
                    </View>
                    <View>
                      <Text style={{color: 'white', ...fontSemiBold, marginTop: 13}}>{newNotification.title}</Text>
                      <View style={{borderRadius: 10, marginVertical: 5, width: 285, minHeight: 30}}>
                        <Text style={{minHeight: 50, color: 'white', ...fontNormal}}>{newNotification.details}</Text>
                      </View>
                    </View>
                    
                  </View>
                  
                </Animated.View>
              </GestureDetector>
            
          }

          {/* <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 200,
                backgroundColor: 'red',
                position: 'absolute',
                top: 40, right: 0, borderRadius: 16
              },
              animatedStyle,
            ]}
          />
        </GestureDetector> */}
    </View>
    </View>
  )
}
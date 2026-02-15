import { router, SplashScreen, Stack } from "expo-router";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import { useEffect, useState } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import ThemeProvider from "./providers/ThemeProvider";
import { AuthContextProvider, useAuthContext } from "./context/AuthContext";
import variables, { defaultShadow, flexRow, fontMedium } from "@/shared/utils/styleVariables";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { ArrowLeftOutlined } from "@lineiconshq/free-icons";
import Lineicons from "@lineiconshq/react-native-lineicons";
import { NotificationProvider } from "./context/NotificationContext";


SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      handleRegistrationError('Permission not granted to get push token for push notification!');
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError('Project ID not found');
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError('Must use physical device for push notifications');
  }
}


export default function RootLayout() {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );

    const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
    'Inter': Inter_400Regular,
  });

useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setExpoPushToken(token ?? ''))
      .catch((error: any) => setExpoPushToken(`${error}`));

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  
  if (!fontsLoaded && !fontError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Carregando fontes...</Text>
      </View>
    );
  }




  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotificationProvider>
      <AuthContextProvider>
        <ThemeProvider>
          <View
            style={{
              height: "3.5%",
              width: "100%",
              backgroundColor: variables.colors["primary/80"],
              
            }}
          />
          <Stack screenOptions={{ header: ({options}) => (
            <View style={{
              width: "100%",
              height: 70,
              position: 'absolute',
              top: 5,
              left: 0,
              padding: 18,
              backgroundColor: 'transparent',
              ...flexRow, alignItems: 'center', gap: 16
            }}>
        <TouchableOpacity style={{
          width: 48,
          height: 48,
            ...defaultShadow,
            borderRadius: 50,
            backgroundColor: variables.colors.action,
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
            borderWidth: 1.2,
            borderColor: variables.colors["defaultStroke/20"],
            zIndex: 20
          }} onPress={() => router.back()}>
            <Lineicons icon={ArrowLeftOutlined} size={28} strokeWidth={20} />
          </TouchableOpacity>
          <Text style={{...fontMedium, fontSize: 16}}>{options.title}</Text>
      </View>
          ) }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
            <Stack.Screen name="index" />
            <Stack.Screen name="login"  />
            <Stack.Screen name="Notifications" options={{ title: "Notificações" }}/>
            <Stack.Screen name="Profile" options={{ title: "Perfil" }} />
          </Stack>
        </ThemeProvider>
      </AuthContextProvider>
      </NotificationProvider>
    </GestureHandlerRootView>
    
  )
}

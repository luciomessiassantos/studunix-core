import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

export default async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) {
    alert('Precisa ser dispositivo físico');
    return;
  }

  const { status: existingStatus } =
    await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } =
      await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    alert('Permissão negada');
    return;
  }

  const token = (
    await Notifications.getExpoPushTokenAsync()
  ).data;

  console.log("TOKEN:", token);

  return token;
}

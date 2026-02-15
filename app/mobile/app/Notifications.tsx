

import variables, { defaultShadow } from '@/shared/utils/styleVariables'
import { ArrowLeftOutlined } from '@lineiconshq/free-icons'
import Lineicons from '@lineiconshq/react-native-lineicons'
import { router } from 'expo-router'  
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native'
import { Notification, NotificationBody, NotificationIcon, NotificationType } from './components/notification-card'
import { useState } from 'react'

export default function Notifications() {

  const [notifications, setNotifications] = useState<NotificationType[]>([
      {
        id: 'n1', 
        details: "Atualizações de segurança da atualização 0.1.3 do app", 
        title: 'Segurança', type: 'System', 
        action: () => { console.log('tester');}, 
        actionLabel: 'Visualizar'
           
      },

      {
        id: 'n2', 
        details: "Atualizações de segurança da atualização 0.1.3 do app", 
        title: 'Atraso de Pagamento', type: 'Finance', 
        action: () => { console.log('tester');}, 
        actionLabel: 'Visualizar'
           
      }
  ])

  return (
    <View style={styles.main}>
      {/* <View style={styles.header}>
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
        
      </View> */}

      <FlatList
          data={notifications}
          keyExtractor={(n) => n.id}
          contentContainerStyle={{
            marginTop: 80, paddingHorizontal: 20, gap: 20
          }}

          renderItem={({item}) => (
            <Notification data={item}>
              <NotificationIcon />
              <NotificationBody />
            </Notification>
          )}

          />
    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    width: '100%', height: '100%',
    backgroundColor: variables.colors["bg"],
    display: 'flex', flexDirection: 'column'
  },
  header: {
    width: "100%",
    height: 70,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 18,
    backgroundColor: 'transparent'
  }
})
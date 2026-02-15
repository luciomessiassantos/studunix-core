
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import variables, { flexRow, flexRowCenter, fontMedium, fontNormal } from '@/shared/utils/styleVariables'
import { useNavigationState } from '@react-navigation/native'
import TabsNavigation, { SubTab } from '@/app/components/TabsNavigation'
import { SafeAreaView } from 'react-native-safe-area-context'

const ROUTES: SubTab[] = [
  { name: "index", path: "/desempenho", label: "Notas" },
  { name: "tarefas", path: "/desempenho/tarefas", label: "Tarefas" },
];


export default function DesempenhoLayout() {



  return (
    <>
    <SafeAreaView style={{ flex: 1, backgroundColor: variables.colors["bg"] }}>
    <TabsNavigation ROUTES={ROUTES}/>

      <Tabs
      
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
          sceneStyle: {
            backgroundColor: variables.colors["bg"]
          },
          
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="tarefas" />
      </Tabs>
      </SafeAreaView>
    </>
  )
}
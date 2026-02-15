import { View, Text, Pressable } from 'react-native'
import React, { Fragment, useEffect } from 'react'
import { router, Tabs } from 'expo-router'
import { useAuthContext } from '../context/AuthContext';
import { CalendarDaysOutlined, CalendarDaysSolid, ClipboardBulk, ClipboardOutlined, ClipboardSolid, Home2Outlined, Home2Solid, TrendUp1Outlined, TrendUp1Solid, VectorNodes6Outlined, VectorNodes6Solid } from "@lineiconshq/free-icons"
import { Lineicons } from "@lineiconshq/react-native-lineicons"
import variables from '@/shared/utils/styleVariables';
import Header from '../components/layout/Header';
import TabBar from '../components/layout/TabBar';


export default function _layout() { 

  const { accessToken } = useAuthContext();

  useEffect(() => {
    if (!accessToken) router.replace("/login");
  }, []);

  return (
  
      <Fragment>
        <Header />
        <Tabs
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false
         }}
        
         >
          <Tabs.Screen
            name="index"
        
            options={{
              title: 'home',
              tabBarIcon: ({color, size, focused}) => (
                    <Lineicons icon={focused ? Home2Solid : Home2Outlined } color={color} size={size} />
                ),
            }}
          />
          <Tabs.Screen
            name="matricula"
            options={{
              title: 'matricula',
              tabBarIcon: ({color, size, focused}) => (
                    <Lineicons icon={focused ? ClipboardSolid : ClipboardOutlined } color={color} size={size} />
                )
            }}
          />
            <Tabs.Screen
            name="Calendar"
        
            options={{
              title: 'Calendar',
              tabBarIcon: ({focused, size }) => (
                 <Lineicons icon={focused ? CalendarDaysSolid : CalendarDaysOutlined } color={'white'} size={size} />
              ),
        
            }}
          />
          <Tabs.Screen
            name="desempenho"
            options={{
              title: 'desempenho',
              tabBarIcon: ({color, size, focused}) => (
                     <Lineicons icon={focused ? TrendUp1Solid : TrendUp1Outlined } color={color} size={size} />
                ),
            }}
          />
          <Tabs.Screen
            name="matriz"
            options={{
              title: 'matriz',
              tabBarIcon: ({color, size, focused}) => (
                     <Lineicons icon={focused ? VectorNodes6Solid : VectorNodes6Outlined } color={color} size={size} />
                ),
            }}
          />
        </Tabs>
      </Fragment>
  )
}
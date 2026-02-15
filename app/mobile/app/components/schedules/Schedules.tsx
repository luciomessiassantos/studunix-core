

import { useState } from 'react'
import * as Crypto from 'expo-crypto';
import { View, Text, StyleSheet, FlatList, ScrollView, Pressable } from 'react-native';
import Days from './Days';
import Options from './Options';
import ScheduleContent from './ScheduleContent';

export default function Schedules() {

    const [selected, setSelected] = useState<"classes" | "events" >("classes")

  return (
    <View style={styles.container}>

     <Days />
    <Options selected={selected} setSelected={setSelected} />

    <ScheduleContent tab={selected} day={new Date()}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    options: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        gap: 8
    },
    option: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Inter",
        
    },
    content: {
        width: "90%",
        height: 400,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 16,
    }
})
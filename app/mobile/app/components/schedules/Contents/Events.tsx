

import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import Card from '@/shared/components/Card'
import variables, { flexCol, flexRow } from '@/shared/utils/styleVariables'

export default function Events() {

  const [events, setEvents] = useState<{ id: string, title: string, date: Date, description: string, color: string}[]>([
    {
      id: "e1",
      title: "ADS Experience",
      date: new Date(12, 2, 2026),
      description: "Evento do ADS Experience 4° edição!",
      color: "pastelBlue"
    },
    {
      id: "e2",
      title: "Provas Finais",
      date: new Date(3, 10, 2026),
      description: "Provas finais do semestre",
      color: "pastelRed"
    },
    {
      id: "e3",
      title: "Reposições",
      date: new Date(20, 6, 2026),
      description: "Reposições",
      color: "pastelYellow"
    }
  ])

  return (
    <View style={styles.main}>
      <FlatList  
      data={events} 
      renderItem={({item}) => (
        <View style={{ ...flexRow, gap: 10}}>
          <View style={{ ...flexCol, alignItems: 'center' }}>
          <Text style={[styles.textDefault, { fontSize: 14, fontFamily: "Inter-Medium"}]}>
              {
                item.date
                .toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'short'
                })
              }
            </Text>
            <Text style={[styles.textDefault, { fontSize: 14, fontFamily: "Inter-Medium"}]}>
              {
                item.date
                .toLocaleTimeString('pt-BR', {
                  hour: 'numeric', 
                  minute: 'numeric'
                })
              }
            </Text>
            </View>
        <Card key={item.id} style={[styles.eventCard, { backgroundColor: variables.colors[`${item.color}/10`], borderLeftWidth: 6, borderLeftColor: variables.colors[item.color], borderRadius: 10 }]}>
          
          <View style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}>
            <Text style={[styles.textDefault, { fontFamily: "Inter-Bold" }]}>{item.title}</Text>
            
          </View>
          <Text style={[styles.textDefault, {marginTop: 12, fontSize: 12, fontWeight: 500}]}>
              {item.description}
            </Text>
        </Card>
        </View>
      )} 
      
      />

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 10
  },
  eventCard: {
        width: 280,
        shadowColor: "rgba(0,0,0,0.25)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 8,
        padding: 20,
        marginBottom: 15
      },
  textDefault: {
    fontFamily: "Inter",
  }
})
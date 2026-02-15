

import { Schedules } from '@/shared/types/Application'
import { ScheduleCardType } from '@/shared/types/Client'
import variables from '@/shared/utils/styleVariables'
import { View, Text, StyleSheet } from 'react-native'

type CardProps = {
  data: ScheduleCardType
}

export default function ScheduleCard({ data }: CardProps) {

  return (
    <View
    style={styles.container}
    >
      <View style={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center', height: "100%" }}>
        <Text style={{ fontFamily: "Inter-Medium", fontSize: 14, textAlign: 'center' }}>{data.schedule.startHour.toLocaleString("pt-BR", {
          hour: 'numeric',
          minute: 'numeric'
        })}</Text>
        <Text style={{ fontFamily: "Inter", fontSize: 14, textAlign: 'center' }}>-</Text>
        <Text style={{ fontFamily: "Inter-Medium", fontSize: 14, textAlign: 'center' }}>{data.schedule.endHour.toLocaleString("pt-BR", {
          hour: 'numeric',
          minute: 'numeric'
        })}</Text>
      </View>

      <View style={[styles.card, { backgroundColor: variables.colors[`${data.color}/10`], borderLeftColor: variables.colors[data.color] }]}>
        <Text
        style={styles.subject}
        >{data.schedule.moduleName}</Text>
        <View style={styles.details}>
          <Text style={{ fontFamily: "Inter" }}>
            {data.schedule.room}
          </Text>
          <View style={styles.dot} />
          <Text style={{ fontFamily: "Inter" }}>
              {data.schedule.professor}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    minHeight: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
    card: {
        width: "80%",
        height: "100%",
        borderRadius: 10,
        
        borderLeftWidth: 5,
        paddingBottom: 10
    },
    subject: {
        fontFamily: "Inter-Medium",
        fontSize: 14,
        margin: 10
    },
    details: {
      width: "80%",
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      paddingLeft: 20
    },
    dot: {
      backgroundColor: 'black',
      height: 3,
      width: 3,
      borderRadius: 50
    }
    
})
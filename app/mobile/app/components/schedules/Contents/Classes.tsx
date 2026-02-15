"use-server"

import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import ScheduleCard from '../ScheduleCard'
import { Schedules } from '@/shared/types/Application'
import { getClasses } from '@/shared/api/routes/Academic'
import type { ScheduleCardType } from '@/shared/types/Client'
import { useGetClasses } from '@/app/hooks/useApiRoutes'
import { useSchedule } from '@/app/context/ScheduleContext'
import variables from '@/shared/utils/styleVariables'

type ClassesCardProps = {
  day: Date
}

export default function Classes({ day }: ClassesCardProps) {
  
  const { schedule, loading } = useSchedule();


  const classes = useMemo(() => {
    const dia = day.toLocaleDateString("pt-BR", {
    weekday: "short"
  });

  console.log(dia);
  console.log(dia.charAt(0).toUpperCase() + dia.slice(1, dia.length - 1));
  

    return schedule[dia.charAt(0).toUpperCase() + dia.slice(1, dia.length - 1)] ?? []
  }, [schedule, day])

  if (loading) return null;


  return (
    <View style={{
      width: "100%",
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'flex-end',
    }}>
      {
        classes.length > 1 ? 
        <FlatList
        data={classes}
        keyExtractor={(item) => item.schedule.id}
        renderItem={(item) => <ScheduleCard key={item.index} data={item.item} />}
        showsVerticalScrollIndicator={false}
      
      />
      :
      <View style={{
        width: "100%",
        height: "130%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: variables.colors["mute/5"],
        marginHorizontal: 35,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: variables.colors["mute/20"],
        borderRadius: 20,
        marginTop: 45
      }}>
        <Text style={{ fontFamily: "Inter-Medium", color: variables.colors["mute/50"], fontSize: 12 }}>Sem aulas hoje</Text>
      </View>

      }
    </View>
  )
}
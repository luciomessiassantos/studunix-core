

import { View, StyleSheet, Animated } from 'react-native'
import React, { useEffect } from 'react'
import schedulesStrategy from './strategy'
import { getClasses } from '@/shared/api/routes/Academic'
import { ScheduleProvider } from '@/app/context/ScheduleContext'
import { useEnterInSlide } from '@/app/hooks/useAnimation'

type Props = {
    tab: "classes" | "events"
    day: Date
}

export default function ScheduleContent({ tab, day }: Props) {
    const strategy = schedulesStrategy[tab];
    const { style, enterIn, reset } = useEnterInSlide()

    useEffect(() => {
        reset();
        enterIn();
    }, [tab]);

    useEffect(() => {
        reset();
        enterIn();
    }, []);

    const Content = strategy.component;

  return <ScheduleProvider>
      <Animated.View
          style={[styles.content, style]}
          >
            <Content day={day} />
          </Animated.View>
  </ScheduleProvider>
}


const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: 400,
        maxHeight: 400,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 16,
        marginBottom: 40
    }
})
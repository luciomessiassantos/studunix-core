import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import variables from '@/shared/utils/styleVariables';

type Props = {
    onSelectDay?: (d: Date) => void
}



export default function Days({ onSelectDay } : Props) {

    const [days, setDays] = useState<Array<{day: string, num: number}>>([
        {
            day: "Dom",
            num: 1
        },
        {
            day: "Seg",
            num: 2
        },
        {
            day: "Ter",
            num: 3
        },
        {
            day: "Qua",
            num: 4
        },
        {
            day: "Qui",
            num: 5
        },
    ])
    const [week, setWeek] = useState<Date[]>([])
    const [today] = useState(new Date());

    useEffect(() => {
        refreshWeekDay();
    }, []);

    const refreshWeekDay = () => {
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const weekIndex = today.getDay();

        const targetDay = day - weekIndex;
        const daysFromWeek: Date[] = []

        for (let i = 0; i < 7; i++) {
            daysFromWeek.push(new Date(year, month, targetDay + i));
        }
        setWeek(daysFromWeek);

    }

    const getWeekDayLabel = (dayIndex: number): string => {
        switch (dayIndex) {
            case 0:
            return 'Dom'
            case 1:
            return 'Seg'
            case 2:
            return 'Ter'
            case 3:
            return 'Qua'
            case 4:
            return 'Qui'
            case 5:
            return 'Sex'
            case 6:
            return 'Sáb'
            default:
            throw new Error('Dia da semana inválido. Use um número de 0 a 6.')
        }
        }

  return (
    <FlatList
        style={{ height: 70 }}
        data={week}
        horizontal
        keyExtractor={(item) => item.toString()}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 18 }}
        renderItem={({item}) => {
            return <Pressable 
            onPress={() => {
                if (onSelectDay) onSelectDay(item);
            }}
            style={[styles.dayCard, today.getDate() == item.getDate() ? { backgroundColor: variables.colors.primary } : { backgroundColor: variables.colors.action }]}>
                <Text
                style={{
                    fontFamily: today.getDate() == item.getDate() ? "Inter-SemiBold" : "Inter",
                    fontSize: 12,
                    color: today.getDate() == item.getDate() ? 'white' : 'black',
                    
                    
                }}
                >{item.getDate()}</Text>
                <Text
                style={{
                    fontFamily: today.getDate() == item.getDate() ? "Inter-SemiBold" : "Inter",
                    fontSize: 16,
                    color: today.getDate() == item.getDate() ? 'white' : 'black',
                    
                }}
                >{getWeekDayLabel(item.getDay())}</Text>
                <View style={{ width: 4, height: 4, backgroundColor: variables.colors.pastelRed, borderRadius: 50 }} />
            </Pressable>
        }}
      />
  )
}



const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    dayCard: {
        width: 70,
        height: "auto",
        paddingVertical: 5,
        fontFamily: "Inter",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: variables.colors["defaultStroke/20"]
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


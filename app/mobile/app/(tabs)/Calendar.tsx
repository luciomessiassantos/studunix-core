
import variables, { flexRow, flexRowCenter, fontMedium, fontNormal } from '@/shared/utils/styleVariables'
import { View, Text, StyleSheet, Animated, FlatList, Pressable } from 'react-native'
import { useEnterInSlideX } from '../hooks/useAnimation'
import { useEffect, useState } from 'react';
import { useCalendar } from '../hooks/useCalendar';
import { CalendarDay } from '@/shared/types/Client';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function Calendar() {

  const { style, enterIn, reset } = useEnterInSlideX();
  const [date, setDate] = useState<Date>(new Date());
  const { calendarDays } = useCalendar({ startDate: date })
  const [days, setDays] = useState<CalendarDay[]>(calendarDays);

  const validateDay = (c: CalendarDay) => new Date().toDateString() === c.date.toDateString();
  const NUM_COLUMNS = 7;

  useEffect(() => {
      enterIn();

      return () => reset();
    }, []);
    useEffect(() => {
      setDays(calendarDays);
    }, []);

    useEffect(() => {
      setDays(calendarDays);
    }, [date]);

    const minusMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        setDate(new Date(year, month - 1, day));
    }

    const plusMonth = () => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate()
        setDate(new Date(year, month + 1, day));
    }

  return (
    <View style={styles.main}>
      
        <View style={styles.header}>
          <Pressable onPress={() => minusMonth()} style={{ height: "32%" }}>
            <ChevronLeft size={24} color={'white'} />
          </Pressable>
          <Animated.View style={[style, { minWidth: "70%" ,maxWidth: "70%",  height: "35%"}]}>
            <Text style={{...fontNormal, fontSize: 22.5, color: variables.colors["textLight"], textAlign: 'center'}}>
                {date.toLocaleDateString("pt-BR", { day: 'numeric', month: 'long', year: 'numeric'})}
            </Text>
          </Animated.View>
          <Pressable  onPress={() => plusMonth()} style={{ height: "32%" }}>
            <ChevronRight size={24} color={'white'} />
          </Pressable>
        </View>
            
            <View style={{...flexRow, alignItems: 'center', height: 50, paddingHorizontal: 10 }}>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Dom</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Seg</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Ter</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Qua</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Qui</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Sex</Text>
              <Text style={{ width: "14.28%", textAlign: 'center', ...fontMedium, color: variables.colors["mute/50"]}}>Sab</Text>
            </View>
              
                <FlatList
                contentContainerStyle={{ paddingHorizontal: 10 }}
                data={days}
                keyExtractor={(item) => item.id}
                numColumns={NUM_COLUMNS}
                renderItem={({ item }) => (
                  <View key={item.id} style={[styles.dayCard, {
                    borderWidth: validateDay(item) ? 2 : 0, borderColor: variables.colors["primary"]
                  }]}>
                    <Text style={{...fontNormal, color: item.active ? 'black' : variables.colors["mute/50"], 
                      }}>{item.day}</Text>
                      <View style={[styles.dayCardContent]}>
                        <View style={{ position: 'relative', height: 40, width: '30%'}}>
                        {
                          item.day == 12 &&
                          Array.from(["pastelPurple", "pastelMint"])
                          .map((c, i) => (
                            <View key={i} style={{width: 10, height: 10, backgroundColor: variables.colors[c], borderRadius: 50, position: 'absolute', bottom: 10, left: i * 6, outlineWidth: 1, outlineColor: 'white'}} />
                            
                          ))
                        }
                        </View>
                      </View>
                  </View>
                )}
              />

    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: variables.colors.bg
    },
    header: {
      width: "100%", height: "20%", backgroundColor: variables.colors["primary"],
      ...flexRow, justifyContent: 'space-evenly', alignItems: 'flex-end'
    },
    content: {
      width: "100%", height: "56%",
      flexDirection: "row",
      flexWrap: "wrap",
      
    },
    dayCard: {
      flex: 1,
      minHeight: 80,
      maxWidth: "14.28%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10
    },
    dayCardContent: {
      width: "100%", height: 40,
      ...flexRowCenter, paddingRight: 10
    },
    addButton: {

    }
});



{/* <View style={{...flexRowCenter, marginBottom: 26, position: 'relative'}}>
              {
                Array.from(["pastelPurple", "pastelRed", "pastelOrange", "pastelGreen", "pastelMint", "pastelYellow"])
                .map((c, i) => (
                  <View key={i} style={{width: 20, height: 20, backgroundColor: variables.colors[c], borderRadius: 50, position: 'absolute', bottom: -1, left: i * 13, outlineWidth: 2, outlineColor: variables.colors["primary"]}} />
                  
                ))
              }
          </View> */}
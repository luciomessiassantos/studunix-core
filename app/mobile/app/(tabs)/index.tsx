
import { View, Text, StyleSheet, ScrollView, FlatList, Animated } from 'react-native'
import variables from '../../shared/utils/styleVariables'
import Schedules from '../components/schedules/Schedules'
import Assignments from '../components/Assignments'
import Card from '@/shared/components/Card'
import Footer from '../components/layout/Footer'
import { useEnterInSlide } from '../hooks/useAnimation'
import { useEffect } from 'react'

export default function Index() {

  const { style, enterIn } = useEnterInSlide();

  useEffect(() => {
    enterIn();
  }, [])

  return (
<Animated.View style={[{
  width: "100%", height: "100%"
}, style]}>
  
      <FlatList
      style={[styles.main]}
        data={[]}
        renderItem={null}
        keyExtractor={() => 'root'}
        ListHeaderComponent={
          <>
            <Schedules />
  
            <Text
              style={{ margin: 20, fontFamily: "Inter", color: variables.colors.mute }}
            >
              Pendências
            </Text>
  
            <Assignments />
  
            <Footer />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
  
</Animated.View>
  )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: variables.colors.bg,
        paddingTop: 90,
        
    },
})


import variables from '@/shared/utils/styleVariables'
import Lineicons from '@lineiconshq/react-native-lineicons'
import { AlertTriangleIcon } from 'lucide-react-native'
import { View, Text, StyleSheet } from 'react-native'

export default function matricula() {
  return (
    <View style={style.main}>
        <AlertTriangleIcon size={64} strokeWidth={1.2} color={variables.colors["mute/50"]} />
        <Text
        style={{
          color: variables.colors["mute/50"],
          fontFamily: "Inter-Medium",
          fontSize: 18
        }}
        >Em desenvolvimento</Text>
    </View>
  )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: variables.colors.bg,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

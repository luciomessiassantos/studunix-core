import { View, Image, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';
import variables from '../shared/utils/styleVariables';

const backgroundImage = require('../assets/images/pexels-kobeboy-1516440.jpg');
const sgeLogo = require("../assets/images/sge.png")


export default function Index() {

  return (
    <View style={styles.container}>
      
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      
      <View style={styles.content}>
        <Image 
        style={{
          width: 300,
          height: 200
        }}
        source={sgeLogo} />
        <Text>Hello</Text>
        <Link href="/login" style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  button: {
    backgroundColor: variables.colors.pastelBlue,
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderRadius: 12,
  },
  buttonText: {
    color: variables.colors.textLight,
    fontFamily: 'Inter-Bold',
    fontSize: 20,
  },

  contentContainer: {
    width: "100%",
    display: "flex",
    height: "40%"
  },

  imageContainer: {
   width: "50%",
   height: "50%"
  },
});
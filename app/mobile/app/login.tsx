import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Pressable,
  TextInputChangeEvent, 
} from 'react-native';
import variables from '../shared/utils/styleVariables'
import { Link, router } from 'expo-router';
import TextBox from './components/TextBox';
import ErrorComponent from './components/ErrorComponent';
import { useAuthContext } from './context/AuthContext';
import { ErrorAuth } from '@/shared/types/Application';
import { Dimensions } from 'react-native';
import { GraduationCap } from 'lucide-react-native';

const { height } = Dimensions.get('window');
const googleLogo = require("../assets/images/image.png")

export type ErrorItem = {
  id: string;
  message: string;
  timestamp: number;
}

export default function Login() {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const formHeight = useRef(new Animated.Value(70)).current;
  const containerHeight = useRef(new Animated.Value(30)).current;


  const [data, setLogin] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<ErrorItem[]>([]);

  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { login } = useAuthContext();

  const onChangePassword = (e: TextInputChangeEvent) => {
    const value = e.nativeEvent.text;
    console.log("Tester");
    
    setPassword(value);
  }

  const onChangeLogin = (e: TextInputChangeEvent) => {
    const value = e.nativeEvent.text;
    console.log("Tester");
    setLogin(value);
  }

  const onPressButton = () => {
    console.log({
      "user": login,
      "password": password
    });
    
    if (!data) {
      displayError("Email ou Matrícula devem ser preenchidos");
      setLoginError(true);
      return;
    }

    if (!data.includes('@') && !data.includes('.')) {
      displayError("Insira um email válido");
      setLoginError(true);
      return;
    }
    
    if (!password) {
      displayError("Senha deve ser preenchida");
      setPasswordError(true);
      return;
    }

    if (data != "aluno@ads.fiponline.edu.br") {
      displayError("Email incorreto ou inexsistente");
      setLoginError(true);
      return;
    }

    try {
      setLoading(true);
      login({
        login: data,
        password
      })

      router.replace("/(tabs)");
    } catch(error) {
      if (error instanceof ErrorAuth) {
        switch(error.field) {
          case "LOGIN":
            displayError(error.message);
            setLoginError(true);
            break;
          case "PASSWORD":
            displayError(error.message);
            setPasswordError(true);
            break;
          
        } 
      } 
    } finally {
      setLoading(false);
    }
    
  }


  const displayError = (message: string) => {
    const newError: ErrorItem = {
      id: Date.now().toString(),
      message,
      timestamp: Date.now()
    }

    setErrors(prev => [...prev, newError]);

    setTimeout(() => {
      setErrors(prev => prev.filter(error => error.id !== newError.id));
    }, 5000);
  }

  useEffect(() => {
    console.log(data);
    
  }, [data])




  useEffect(() => {

    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (e) => {
        const keyboardHeight = e.endCoordinates.height;

        Animated.timing(formHeight, {
          toValue: 75, 
          duration: 150,
          useNativeDriver: false,
        }).start();

        Animated.timing(containerHeight, {
          toValue: 25, 
          duration: 150,
          useNativeDriver: false,
        }).start();
        
        setKeyboardHeight(keyboardHeight);
      }
    );

    
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
       
        Animated.timing(formHeight, {
          toValue: 70,
          duration: 150,
          useNativeDriver: false,
        }).start();
        
        Animated.timing(containerHeight, {
          toValue: 30, 
          duration: 150,
          useNativeDriver: false,
        }).start();
        setKeyboardHeight(0);
      }
    );


    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);



  return (
    <View style={style.main}>
      
      <Animated.View 
          style={[
            style.imageContainer,
            { 
              height: containerHeight.interpolate({
                inputRange: [25, 30],
                outputRange: [height * 0.25, height * 0.3]
              })
            }
          ]} >
            <View style={{
              width: 100,
              height: 100,
              backgroundColor: variables.colors["primary/20"],
              borderRadius: 50,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <GraduationCap size={58} strokeWidth={1.6} stroke={variables.colors["primary"]} />
            </View>
        <Text style={style.imageText}>
          Se conecte com sua instituição em <Text style={style.textBold}>qualquer lugar</Text> e a <Text style={style.textBold}>qualquer momento</Text>
        </Text>
      </Animated.View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View 
          style={[
            style.formContainer,
            { 
              height: formHeight.interpolate({
                inputRange: [75, 80],
                outputRange: [height * 0.75, height * 0.8]
              })
            }
          ]}
        >
          <Text style={style.formTitle}>Login</Text>

          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={style.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={style.formContent}>
              <TextBox 
              errorTreatment={{
                error: loginError,
                setError: setLoginError
              }}
              onChangeCallback={onChangeLogin}
              label='Email ou Matrícula' 
              type='email'  
              />

              <TextBox 
              errorTreatment={{
                error: passwordError,
                setError: setPasswordError
              }}
              onChangeCallback={onChangePassword}
              label='Senha' 
              type='password'  
              />
              
              <Link
              style={style.forgotPassword}
              href={"/forgot_password"}>Esqueci a senha</Link>
              
              <View style={{ height: keyboardHeight > 0 ? keyboardHeight / 2 : 25 }} />
                <Pressable
                  onPress={onPressButton}
                  style={style.submitButton}
                    >
                      
                    <Text
                      style={style.buttonText}
                      >
                        Entrar
                      </Text>
                </Pressable>
                <Pressable
                  onPress={() => {}}
                  style={style.googleButton}
                    >
                      <Image
                      style={{
                        width: 24,
                        height: 24
                      }}
                      source={googleLogo}
                      />
                    <Text
                      style={{
                        fontFamily: 'Inter-Medium',
                        color: variables.colors.active,
                        textAlign: "center",
                        fontSize: 15,
                        
                      }}
                      >
                        Entrar com o google
                      </Text>
                </Pressable>
            </View>
            
              
          </ScrollView>
        </Animated.View>
      </TouchableWithoutFeedback>

      <View style={style.errorsContainer}>
        {errors.map(error => (
          <ErrorComponent 
            key={error.id}
            message={error.message}
          />
        ))}
      </View>

    </View>
  );
}



export const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'white',
    position: "relative"
  },
  text: {
    color: variables.colors.textLight,
    fontFamily: 'Inter'
  },

  imageContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: 'white',
    gap: 18,
    paddingBottom: 20
  },
  imageText: {
    
    zIndex: 3,
    textAlign: "center",
    fontSize: 15,
    fontFamily: 'Inter',
    paddingHorizontal: 20
  },
  textBold: {
    fontWeight: 600,
    fontSize: 15,
    fontFamily: 'Inter-Bold'
  },

    formContainer: {
    backgroundColor: variables.colors.action,
    width: "100%",
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },

  formTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    textAlign: "center",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: variables.colors["primary"]
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },

  formContent: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  
  fieldContainer: {
    width: "100%",
    marginBottom: 20,
  },



  input: {
    width: "100%",
    height: 20,
    paddingHorizontal: 15,
    fontFamily: 'Inter',
    borderWidth: 1,
    borderColor: variables.colors.defaultStroke,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    marginTop: 4
  }, 

  label: {
    fontFamily: "Inter",
    fontSize: 15,
  },


  submitButton : {
      backgroundColor: variables.colors.primary,
      width: "90%",
      paddingVertical: 10,
      borderRadius: 40,
      marginBottom: 20
      
  },

  buttonText: {
    color: variables.colors.textLight,
    fontFamily: "Inter-Medium",
    fontSize: 15,
    textAlign: "center"
  },

  forgotPassword: {
    color: variables.colors.primary,
    fontFamily: 'Inter-Medium'
  },

  googleButton: {
    width: "90%",
    paddingVertical: 8,
    paddingHorizontal: 20,
    gap: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: variables.colors["defaultStroke/50"],
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  errorsContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },

})

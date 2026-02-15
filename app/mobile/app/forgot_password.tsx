

import variables from '@/shared/utils/styleVariables'
import { Link } from 'expo-router';
import { View, Text, StyleSheet, Image, Animated, Keyboard, Pressable, ScrollView, TouchableWithoutFeedback, Platform, TextInputChangeEvent } from 'react-native'
import TextBox from './components/TextBox';
import { useEffect, useRef, useState } from 'react';
import { ErrorItem } from './login';
import React from 'react';
import ErrorComponent from './components/ErrorComponent';

const backgroundImage = require("../assets/images/pexels-pixabay-289737.jpg");

export default function ForgotPassword() {

  const scrollViewRef = useRef<ScrollView | null>(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const formHeight = useRef(new Animated.Value(65)).current;
  const codeForm = useRef(new Animated.Value(0)).current;

  const [emailError, setEmailError] = useState(false);

  const [errors, setErrors] = useState<ErrorItem[]>([])
  const [email, setEmail] = useState<string | undefined>(undefined);

  const [code, setCode] = useState<string | undefined>(undefined);
  const [codeError, setCodeError] = useState(false);
  const [codeFormShow, setCodeFormShow] = useState(false);



  const onChangeEmail = (e: TextInputChangeEvent) => {
    const value = e.nativeEvent.text;

    setEmail(value);
    if (emailError) setEmailError(false);
  }

  const onPressButton = () => {
    if (!email) {
      setEmailError(true);
      displayError("Campo email deve ser preenchido");
      return;
    }
    if (!email.includes("@")) {
      setEmailError(true);
      displayError("Digite um email válido");
      return;
    }

    console.log(email);
    
    secondForm();

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




  const secondForm = () => {


    setTimeout(() => {

      if (email != "aluno@ads.fiponline.edu.br") {
        displayError("Email incorreto ou inexistente");
        setEmailError(true);
        return;
      }

      setCodeFormShow(true);
      Animated.timing(codeForm, {
      toValue: 65,
      duration: 200,
      useNativeDriver: false
    }).start();
    }, 5000);
  }

  const onCodeChange = (e: TextInputChangeEvent) => {
    const value = e.nativeEvent.text;

    setCode(value);
  }


  const sendCode = () => {
    console.log(code);
    
  }

  useEffect(() => {

    const KeyboardListener = Keyboard.addListener(
      Platform.OS === "ios" ? 'keyboardWillShow' : "keyboardDidShow",
      (e) => {
        const keyboardHeight = e.endCoordinates.height;

        if (codeFormShow) {
          Animated.timing(codeForm, {
          toValue: 85,
          duration: 200,
          useNativeDriver: false
        }).start();
        
        
        } 
        else {
          Animated.timing(formHeight, {
          toValue: 85,
          duration: 200,
          useNativeDriver: false
        }).start();
        }
        

        setKeyboardHeight(keyboardHeight);
      }
    )

    const KeyboardHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? 'keyboardWillHide' : "keyboardDidHide",
      () => {

        if (codeFormShow) {
          Animated.timing(codeForm, {
          toValue: 65,
          duration: 200,
          useNativeDriver: false
        }).start();
        } 
        else {
          Animated.timing(formHeight, {
          toValue: 65,
          duration: 200,
          useNativeDriver: false
        }).start();
        }

        setKeyboardHeight(0);
      }
    )

    return () => {
      KeyboardListener.remove();
      KeyboardHideListener.remove();
    }

  }, [codeFormShow]);
    
  return (
    <View style={style.main}>
      
      <View style={style.imageContainer}>
        <Image style={style.image} source={backgroundImage} />
        <View style={style.imageAfter}></View>
        <Text style={style.imageText}>
          Se conecte com sua instituição em <Text style={style.textBold}>qualquer lugar</Text> e a <Text style={style.textBold}>qualquer momento</Text>
        </Text>
      </View>



      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View 
          style={[
            style.formContainer,
            { 
              height: formHeight.interpolate({
                inputRange: [65, 85],
                outputRange: ['65%', '85%']
              })
            }
          ]}
        >
          <Text style={style.formTitle}>Recuperar Senha</Text>
          <View style={{
            width: "100%",
            height: "13%",
            display: "flex",
            alignItems: "center",
            
          }}>
            <Text style={style.description}>
              Insira o código de verificação que foi enviado para seu email institucional
            </Text>
          </View>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={style.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={style.formContent}>
              <TextBox 
              errorTreatment={{
                error: emailError,
                setError: setEmailError
              }}

              onChangeCallback={onChangeEmail}
              label='Email Institucional' 
              type='email'  
              />
              
              <View style={{ height: keyboardHeight > 0 ? keyboardHeight / 2 : 160 }} />
                <Pressable
                  onPress={onPressButton}
                  style={style.submitButton}
                    >
                    <Text
                      style={style.buttonText}
                      >
                        Enviar email
                      </Text>
                </Pressable>
                <Link href={"/login"} style={style.goBack}>
                  Voltar
                </Link>
            </View>
            
              
          </ScrollView>
        </Animated.View>
      </TouchableWithoutFeedback>

        {/* Formulário do código numérico */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View 
          style={[
            style.codeFormContainer,
            { 
              height: codeForm.interpolate({
                inputRange: [0, 65, 85],
                outputRange: ['0%', '65%', '85%']
              })
            }
          ]}
        >
          <Text style={style.formTitle}>Validação de Código</Text>
          <View style={{
            width: "100%",
            height: "13%",
            display: "flex",
            alignItems: "center",
            
          }}>
            <Text style={style.description}>
              Insira o código de verificação que foi enviado para o seu email
            </Text>
          </View>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={style.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={style.formContent}>
              <TextBox 
              errorTreatment={{
                error: codeError,
                setError: setCodeError
              }}
              onChangeCallback={onCodeChange}
              label='Codigo de verificação' 
              type='code'
              codeLength={6}  
              />
              
              <View style={{ height: keyboardHeight > 0 ? keyboardHeight / 2 : 160 }} />
                <Pressable
                  onPress={sendCode}
                  style={style.submitButton}
                    >
                    <Text
                      style={style.buttonText}
                      >
                        Validar código
                      </Text>
                </Pressable>
                <Link href={"/login"} style={style.goBack}>
                  Voltar
                </Link>
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
  )
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    backgroundColor: variables.colors.primary,
    position: "relative"
  },
  text: {
    color: variables.colors.textLight,
    fontFamily: 'Inter'
  },

  imageContainer: {
    width: "100%",
    height: "40%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top:0
  },

  image: {
    width: "100%",
    height: "120%",
    resizeMode: "cover",
    position: "absolute"
  },

  imageAfter: {
    width: "100%",
    height: "109%",
    position: "absolute",
    top: 0,
    backgroundColor: variables.colors.primary,
    opacity: 0.4,
    zIndex: 2
  },
  imageText: {
    
    zIndex: 3,
    textAlign: "center",
    color: variables.colors.textLight,
    fontSize: 15,
    fontFamily: 'Inter',
    paddingHorizontal: 20
  },
  textBold: {
    fontWeight: 600,
    color: variables.colors.textLight,
    fontSize: 15,
    fontFamily: 'Inter-Bold'
  },




    formContainer: {
    position: "absolute",
    backgroundColor: variables.colors.action,
    width: "100%",
    bottom: 0,
    zIndex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  codeFormContainer: {
    position: "absolute",
    backgroundColor: variables.colors.action,
    width: "100%",
    bottom: 0,
    zIndex: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    opacity: 1
  },

  formTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    textAlign: "center",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    fontFamily: "Inter",
    textAlign: "center",
    width: "80%"
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
    height: 50,
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
    fontSize: 14,
    textAlign: "center"
  },


  goBack: {
    color: variables.colors.primary,
    fontFamily: 'Inter-Medium'
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
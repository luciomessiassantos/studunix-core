import variables from '@/shared/utils/styleVariables'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { View, Text, TextInput, StyleSheet, NativeSyntheticEvent, TextInputChangeEvent, TextInputProps } from 'react-native'

type InputProps = {
    label: string
    placeholder?: string
    value?: string
    type: "email" | "text" | "numeric" | "password" | "code"
    codeLength?: number
    onChangeCallback: (e: TextInputChangeEvent) => void
    errorTreatment?: {error: boolean, setError: (e: boolean) => void}
}


export default function TextBox({label, placeholder, type, onChangeCallback, errorTreatment, codeLength} : InputProps) {

    const [show, setShow] = useState(false);
    const codeInputsRef = useRef<TextInput[]>([]);
    
    const [codeDigits, setCodeDigits] = useState<string[]>(
    Array(codeLength).fill('')
  );

  const handleCodeDigitChange = useCallback((
    text: string, 
    index: number
  ) => {
    
    const digit = text.replace(/[^0-9]/g, '').slice(0, 1);
    
    const newDigits = [...codeDigits];
    newDigits[index] = digit;
    setCodeDigits(newDigits);
  
    const mockEvent = {
      nativeEvent: {
        text: newDigits.join('')
      }
    } as TextInputChangeEvent;
    
    
    onChangeCallback(mockEvent);
    
    if (!codeLength) return;

    if (digit !== '' && index < codeLength - 1) {
      
      codeInputsRef.current[index + 1]?.focus();
    } else if (digit === '' && index > 0) {
      
      codeInputsRef.current[index - 1]?.focus();
    }
    
    
    if (errorTreatment?.error && newDigits.every(d => d !== '')) {
      errorTreatment.setError(false);
    }
  }, [codeDigits, codeLength, onChangeCallback, errorTreatment]);

  const handleCodeKeyPress = useCallback((
    e: NativeSyntheticEvent<any>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (codeDigits[index] === '' && index > 0) {
        
        codeInputsRef.current[index - 1]?.focus();
        
        const newDigits = [...codeDigits];
        newDigits[index - 1] = '';
        setCodeDigits(newDigits);
        
        
        const mockEvent = {
          nativeEvent: {
            text: newDigits.join('')
          }
        } as TextInputChangeEvent;
        onChangeCallback(mockEvent);
      }
    }
  }, [codeDigits, onChangeCallback]);



  switch (type) {
    case "email":
        return (
            <View style={style.fieldContainer}>
                <Text style={style.label}>{label} </Text>
                    <TextInput
                      style={[style.input,
                        errorTreatment?.error && { 
                        borderWidth: 2, 
                        borderColor: variables.colors.error  }
                      ]}
                      onFocus={() => errorTreatment?.setError(false)}
                      placeholder={placeholder}
                      onChange={onChangeCallback}
                      keyboardType='email-address'
                      placeholderTextColor="#999"
                    />
                
              </View>
            )
    case "password":
        return (
            <View style={style.fieldContainer}>
                <Text style={style.label}>{label}</Text>
                <View
                style={[style.passwordInputContainer, 
                    errorTreatment?.error && { borderWidth: 2, borderColor: variables.colors.error }
                  ]}
                >
                    <TextInput
                    style={style.passwordInput}
                      placeholder={placeholder}
                      onChange={onChangeCallback}
                      placeholderTextColor="#999"
                      textContentType='password'
                      secureTextEntry={!show}

                      onFocus={() => errorTreatment?.setError(false)}
                    />
                    <MaterialCommunityIcons
                    style={{
                        fontSize: 22,
                        color: variables.colors.mute
                    }}
                    onPress={() => setShow(!show)}
                    name={show ? 'eye-closed' : 'eye'} />
                </View>
              </View>
            )
    case "text":
        return (
            <View style={style.fieldContainer}>
                <Text style={style.label}>{label} </Text>
                <TextInput
                  style={[style.input,
                        errorTreatment?.error && { borderWidth: 2, borderColor: variables.colors.error }
                  ]}
                  onFocus={() => errorTreatment?.setError(false)}
                  placeholder={placeholder}
                  keyboardType='email-address'
                  placeholderTextColor="#999"
                />
              </View>
            )
    case "numeric":
        return (
            <View style={style.fieldContainer}>
                <Text style={style.label}>{label} </Text>
                <TextInput
                  style={[style.input,
                        errorTreatment?.error && { borderWidth: 2, borderColor: variables.colors.error }
                  ]}
                  onFocus={() => errorTreatment?.setError(false)}

                  placeholder={placeholder}
                  keyboardType='email-address'
                  placeholderTextColor="#999"
                />
            </View>
        )
    case "code":

      return (
        codeLength &&
          <View style={style.fieldContainer}>
            <Text style={style.label}>{label} </Text>
            
            <View style={style.codeInputContainer }>
                {
                  Array.from({length: codeLength}).map((_, index) => (
                    <TextInput 
                    ref={(ref) => {
                        if (ref) codeInputsRef.current[index] = ref;
                    }}
                    value={codeDigits[index]}
                    key={index}
                    onChangeText={(text) => handleCodeDigitChange(text, index)}
                    onKeyPress={(e) => handleCodeKeyPress(e, index)}
                    onChange={onChangeCallback}
                    maxLength={1}
                    
                    selectTextOnFocus={true}
                    keyboardType='number-pad'
                    style={[style.codeInput,
                        errorTreatment?.error && { borderWidth: 2, borderColor: variables.colors.error }
                  ]}
                  onFocus={() => errorTreatment?.setError(false)}
                  contextMenuHidden={true}
                    />
                  ))
                }
            </View>
          </View>
      )
  }
}


const style = StyleSheet.create({
    fieldContainer: {
        width: "100%",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 42,
        paddingHorizontal: 15,
        fontFamily: 'Inter',
        borderWidth: 1,
        borderColor: variables.colors["defaultStroke/50"],
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 4
    },

    passwordInputContainer: {
        width: "100%",
        height: 42,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: variables.colors["defaultStroke/50"],
        borderRadius: 10,
        marginTop: 4
    },
    codeInputContainer: {
      width: "100%",
      height: 60,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      marginTop: 10
    },
    codeInput: {
      width: "15%",
      height: "100%",
      fontFamily: "Inter-Medium",
      fontSize: 20,
      borderWidth: 1,
      borderColor: variables.colors.defaultStroke,
      borderRadius: 10,
      textAlign: "center"
    },

    passwordInput: {
        width: "90%",
        height: "100%",
        paddingHorizontal: 15,
        fontFamily: 'Inter',
    },

    label: {
        fontFamily: "Inter",
        fontSize: 12,
        color: variables.colors.mute
    },
})
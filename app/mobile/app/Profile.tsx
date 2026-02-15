

import variables, { defaultShadow, flexCol, flexRow, flexRowCenter } from '@/shared/utils/styleVariables'
import { Edit2Icon, EditIcon, LogOut } from 'lucide-react-native'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { useAuthContext } from './context/AuthContext'
import { router } from 'expo-router';
import Lineicons from '@lineiconshq/react-native-lineicons';
import { ArrowLeftOutlined, User4Outlined } from "@lineiconshq/free-icons"

export default function Profile() {

  const { logout } = useAuthContext();

  const onPress = () => {
    logout();
    router.replace("/login");
    
  }

  return (
    <ScrollView style={style.main}>
      <View style={style.profileCard}>
        <View style={style.profile}>
          <Lineicons icon={User4Outlined} size={32} strokeWidth={20}/>
          
        </View>
        <View style={{marginLeft: 12}}>
            <Text style={{ fontFamily: variables.fonts["interMedium"]}}>Nando Moura Trigueiro Cardoso</Text>
            <Text style={{ fontFamily: variables.fonts["inter"], color: variables.colors["mute/50"]}}>aluno@ads.fiponline.edu.br</Text>
          </View>
      </View>
      <View style={style.optionsCard}>
          <View>
            <Text style={{marginTop: 12, fontFamily: variables.fonts["interMedium"]}}>Dados do sistema</Text>

            <View style={{ ...flexRow, marginTop: 12, gap: 12 }}>
              <View style={style.infoSpace} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Senha
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], color: variables.colors["mute/50"], marginLeft: 10}}>
                    ********
                  </Text>
              </View>

              <TouchableOpacity style={[style.infoSpace, {...flexRowCenter}]} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"], color: variables.colors["primary"] }}>
                      Alterar senha
                  </Text>
              </TouchableOpacity>
            </View>

            <View style={{ ...flexRow, gap: 12, marginTop: 12 }}>
              <View style={style.infoSpace} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Matrícula
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    2023.1.555.333
                  </Text>
              </View>
              <View style={style.infoSpace} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      CPF
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    ***.***.**5-06
                  </Text>
              </View>
            </View>

              <View style={[style.infoSpace, { width: "100%"}]} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Curso
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    Análise e Desenvolvimento de Sistemas
                  </Text>
              </View>

            <View style={{ ...flexRow, marginTop: 12, gap: 12 }}>
              <View style={style.infoSpace} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Turno
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    Noturno
                  </Text>
              </View>

              <View style={[style.infoSpace]} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Período
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    2026.1
                  </Text>
              </View>
            </View>

            <View style={[style.infoSpace, { width: "100%"}]} >
                  <Text style={{  fontFamily: variables.fonts["interMedium"] }}>
                      Último Login
                  </Text>
                  <Text style={{ fontFamily: variables.fonts["inter"], marginLeft: 10}}>
                    {new Date().toLocaleDateString("pt-BR", {
                      day:'numeric', month: "long", hour: "numeric", minute: "numeric", second: "numeric", weekday: 'long'
                    })}
                  </Text>
              </View>

          </View>
      </View>

      <TouchableOpacity
      style={style.edit}>
        <EditIcon size={20} />
        <Text style={[style.optionText]}>
          Editar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={onPress}
      style={style.logout}>
        <LogOut size={20} color={variables.colors["pastelRed"]}/>
        <Text style={[style.optionText, { color: variables.colors["pastelRed"]}]}>
          Sair
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: variables.colors.bg,
        padding: 20,
    },
    profileCard: {
      width: "100%",
      height: "10%",
      minHeight: 78,
      backgroundColor: variables.colors.action,
      borderRadius: 16,
      marginTop: 70,

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      borderWidth: 1.2,
      borderColor: variables.colors["defaultStroke/20"],

      paddingHorizontal: 10,

      ...defaultShadow

    },
    profile: {
      backgroundColor: variables.colors["pastelBlue/50"],
      padding: 12,
      borderRadius: 50
    },
    optionsCard: {
      width: "100%",
      height: "50%",
      minHeight: 420,
      backgroundColor: variables.colors.action,
      borderRadius: 15,
      marginTop: 25,
      paddingHorizontal: 20,
    },
    optionButton: {
      width: "100%",
      minHeight: "10%",
      height: "auto",
      backgroundColor: variables.colors.action,
      marginTop: 25,

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      
      borderBottomWidth: 1.2,
      borderBottomColor: variables.colors.defaultStroke
    },
    logout: {
      width: "100%",
      height: "8%",
      borderRadius: 10,

      
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      paddingHorizontal: 20,
      gap: 20,

      
    },
    edit: {
      width: "100%",
      height: "8%",
      borderRadius: 50,
      marginBottom: 10,

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",

      paddingHorizontal: 20,
      gap: 20,
      
    },
    optionText: {
      fontFamily: "Inter",
      fontSize: 16
    },
    infoSpace: {
      marginTop: 5, width: "50%", paddingHorizontal: 10,
      minHeight: 60
    },
    footer: {

    }
})



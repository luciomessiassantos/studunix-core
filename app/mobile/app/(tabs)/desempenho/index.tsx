


import variables, { defaultShadow, flexCol, flexRow, flexRowCenter, fontMedium, fontNormal, fontSemiBold } from '@/shared/utils/styleVariables'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { gradesDataMock } from '@/shared/api/data-mock'
import { gradesColumnDef } from '@/shared/api/ColumnsDefinition'
import { useState } from 'react'
import { GradesResponse } from '@/shared/types/Application'
import Card from '@/shared/components/Card'
import Lineicons from '@lineiconshq/react-native-lineicons'
import { RotateCcw } from 'lucide-react-native'
import Badge from '@/app/components/Badge'
import VerticalTable from '@/app/components/ui/verticalTable/VerticalTable'
import { CommomColors } from '@/shared/types/Client'


export default function desempenho() {

  const [data, setData] = useState<GradesResponse[]>(gradesDataMock)
  const [warn, setWarn] = useState<{label: string, content: string, color: CommomColors } | undefined>(
    {
    label: "Atualização de notas", 
    content: "As notas do sistema foram atualizadas pelo docente",
    color: "pastelBlue"
  });


  return (
    <View style={{
      width: "100%", height: "100%",
    ...flexCol, alignItems: 'center', backgroundColor: variables.colors["bg"]
    }}>


      <View style={{
        width: '100%', maxHeight: 140, ...flexRowCenter
      }}>
{   warn &&     
        <Card style={{
        backgroundColor: variables.colors[`${warn.color}/10`],
        maxHeight: 140, width: "90%"
      }}>
        <View style={{paddingTop: 16, paddingHorizontal: 16, ...flexRowCenter, justifyContent: 'flex-start', gap: 16  }}>
          <View style={{padding: 12, borderRadius: 10, backgroundColor: variables.colors[`${warn.color}/20`]}}>
            <RotateCcw color={variables.colors[warn.color]} />
          </View>
          <Text style={{
            ...fontMedium, fontSize: 16
          }}>Notas atualizadas</Text>
        </View>
        <Text style={{...fontNormal, margin:20, color: variables.colors["mute/80"]}}>As notas foram atualizadas pelo docente</Text>
      </Card>}

      </View>



      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ marginTop: 10, gap: 50, padding: 10, paddingBottom: 275  }}
        renderItem={({item}) => (
          <View style={{
                width: "100%",
                minHeight: 100,
                borderRadius: 10,
                padding: 12,
                ...defaultShadow,
                backgroundColor: variables.colors["action"]
              }}>
                <View style={{...flexRow, justifyContent: 'space-between', alignItems: 'flex-start', margin: 5, marginBottom: 10}}>
                  <Text style={{ ...fontSemiBold, margin: 2, maxWidth: "60%", fontSize: 16}}>{item.moduleName}</Text>
                  <Badge style={{ paddingHorizontal: 20, paddingVertical: 8}} label={item.state} color={item.state == 'Cursando' ? "Outline" : item.state == "Aprovado" ? "pastelGreen" : "pastelRed"} />
                </View>
                <VerticalTable key={item.id} keyExtractor={(i) => i.id} data={item} columns={gradesColumnDef} />
              </View>
        )}
      />
    </View>
  )
}

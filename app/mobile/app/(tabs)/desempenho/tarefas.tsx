

import { View, Text, Animated, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Assignment } from '@/shared/types/Application'
import { assignmentsMock } from '@/shared/api/data-mock'
import VerticalTable from '@/app/components/ui/verticalTable/VerticalTable';
import { AssignmentColumnDef } from '@/shared/api/ColumnsDefinition';
import variables, { defaultShadow, flexRow, flexRowCenter, fontSemiBold } from '@/shared/utils/styleVariables';
import Badge from '@/app/components/Badge';
import { router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function tarefas() {

    const [data, setData] = useState<Assignment[]>(assignmentsMock);

  return (
    <Animated.View style={{
        width: "100%", height: '100%'
    }}>
        <View style={{
            width: '100%', height: 30, ...flexRow, justifyContent: 'flex-end', alignItems: 'center'
        }}>
            
        </View>
        <FlatList
            data={data}

            keyExtractor={(i) => i.id}
            contentContainerStyle={{ gap: 20, padding: 10 }}
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={() => router.push({
                    pathname: "/AssignmentDetails",
                    params: {
                        assignId: item.id
                    }
                })}
                style={{
                width: "100%",
                minHeight: 100,
                borderRadius: 10,
                padding: 12,
                ...defaultShadow,
                backgroundColor: variables.colors["action"]
              }}>
                <View style={{...flexRow, justifyContent: 'space-between', alignItems: 'flex-start', margin: 5, marginBottom: 10}}>
                  <Text style={{ ...fontSemiBold, margin: 2, maxWidth: "60%", fontSize: 14}}>{item.moduleName}</Text>
                  <Badge style={{ paddingHorizontal: 20, paddingVertical: 8}} label={item.state == "Pending" ? "Pendente" : item.state == "Done" ? "Finalizada" : "Expirada"} color={item.state == 'Pending' ? "pastelYellow" : item.state == "Done" ? "pastelGreen" : "pastelRed"} />
                </View>
                <VerticalTable key={item.id} keyExtractor={(i) => i.id} data={item} columns={AssignmentColumnDef} />
              </TouchableOpacity>
            )}
        />
    </Animated.View>
  )
}
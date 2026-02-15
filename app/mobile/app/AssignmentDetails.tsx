

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import CommonHeader from './components/CommonHeader';
import variables, { flexCol, flexRow, flexRowCenter, fontMedium, fontNormal } from '@/shared/utils/styleVariables';
import { Assignment } from '@/shared/types/Application';
import { assignmentsMock, findById } from '@/shared/api/data-mock';
import Badge from './components/Badge';
import VerticalTable from './components/ui/verticalTable/VerticalTable';
import { AssignmentDetailColumnDef } from '@/shared/api/ColumnsDefinition';
import { formatModuleLabel } from '@/shared/utils/StringUtils';

export default function AssignmentDetails() {

    const { assignId } = useLocalSearchParams();

    const [data, setData] = useState<Assignment | undefined>(undefined);

    useEffect(() => {
        const response = findById<Assignment>(assignmentsMock, assignId as string);

        if (response) setData(response);

    }, [assignId]);

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: variables.colors["bg"], ...flexCol, alignItems: 'center'}}>
        <View style={{
            width: "90%", height: 80, ...flexRowCenter
        }}>
            <CommonHeader />
        </View>
        <View style={{ width: '90%',...flexRow, alignItems: 'center', paddingVertical: 16, paddingHorizontal: 5, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: variables.colors["mute/20"]}}>
            <Text style={{
                ...fontMedium, fontSize: 18, 
                maxWidth: "50%"
            }}>{data?.title}</Text>
            <Badge label={data?.moduleName ? formatModuleLabel(data.moduleName) : ''} color='pastelBlue' />

        </View>

        <View style={{
            width: '100%', minHeight: 30, maxHeight: 140, padding: 30
        }}>
            <Text style={{
                ...fontNormal, fontSize: 14
            }}>{data?.content}</Text>
        </View> 

            <View style={{width: '100%', paddingHorizontal: 20}}>
                {
                    data &&
                    <VerticalTable data={data} keyExtractor={(i) => i.id} columns={AssignmentDetailColumnDef} />
                }
            </View>



    </View>
  )
}



import Card from "@/shared/components/Card"
import variables, { flexCol, flexRow, flexRowCenter, fontMedium, fontNormal } from "@/shared/utils/styleVariables"
import { AlertCircle, AlertTriangle, Clipboard, ClipboardIcon, DollarSignIcon, GitGraphIcon, GraduationCap, LockIcon, LucideIcon, RotateCcwIcon } from "lucide-react-native"
import { createContext, JSX, memo, ReactNode, useContext } from "react"
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native"

type NotificationEnum = 'Academic' | 
'System' | 
'Finance' | 
'Error' | 
'Security'| 
'Alert' | 
'Matricula';

export interface NotificationType {
    id: string
    title: string
    type: NotificationEnum

    details: string

    action?: (data?: any | any[]) => any | any[] | void
    actionLabel?: string
}

const NotificationContext = createContext<NotificationType | undefined>(undefined);

const useNotificationContext = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error("the hook must be used inside a provider!");
    
    return context;
}

export const Notification = ({
    children, data
}: { children: ReactNode, data: NotificationType }) => {

    const bg = data.type == 'System' ? variables.colors['primary/20'] :
    data.type == 'Academic' ? variables.colors['pastelGreen/20'] :
    data.type == 'Error' ? variables.colors['pastelRed/20'] :
    variables.colors["pastelYellow/20"];

    const border = data.type == 'System' ? variables.colors['primary/50'] :
    data.type == 'Academic' ? variables.colors['pastelGreen/50'] :
    data.type == 'Error' ? variables.colors['pastelRed/50'] :
    variables.colors["pastelYellow/50"]

    return (
        <NotificationContext.Provider value={data}>
            <Card style={{...flexRow, 
                backgroundColor: bg,
                minHeight: 100
                }}>
                {children}
            </Card>
        </NotificationContext.Provider>
    )
}

export const NotificationIcon = ({style}: {style?: StyleProp<ViewStyle>}) => {

    const { type } = useNotificationContext();

    const bg = type == 'System' ? variables.colors['primary/20'] :
    type == 'Academic' ? variables.colors['pastelGreen/20'] :
    type == 'Error' ? variables.colors['pastelRed/20'] :
    variables.colors["pastelYellow/20"];

    const color = type == 'System' ? variables.colors['primary'] :
    type == 'Academic' ? variables.colors['pastelGreen'] :
    type == 'Error' ? variables.colors['pastelRed'] :
    variables.colors["pastelYellow"];

    const iconMap: Record<NotificationEnum, LucideIcon> = {
        Academic: GraduationCap,
        Alert: AlertCircle,
        Error: AlertTriangle,
        Finance: DollarSignIcon,
        Matricula: ClipboardIcon,
        Security: LockIcon,
        System: RotateCcwIcon
    }

    const Icon = iconMap[type];

    return(
        <View style={[style]}>
            <View style={{padding: 12, margin: 14, backgroundColor: bg, borderRadius: 10, maxHeight: 'auto'}}>
                {
                    <Icon color={color} />
                }
            </View>
        </View>
    )
}

export const NotificationBody = ({style}: {style?: StyleProp<ViewStyle>}) => {

    const {title, details, action, type, actionLabel} = useNotificationContext();

    const color = type == 'System' ? variables.colors['primary'] :
    type == 'Academic' ? variables.colors['pastelGreen'] :
    type == 'Error' ? variables.colors['pastelRed'] :
    variables.colors["pastelYellow"];

    return (
        <View style={[{ ...flexCol, padding: 8, paddingTop: 14, width: '77%', justifyContent: 'flex-start' }, style]}>
            <Text style={{...fontMedium}}>{title}</Text>
            <Text style={{...fontNormal}}>{details}</Text>
            {
                action && 
                <View  style={{width: '100%', ...flexRow, justifyContent: 'flex-end', alignItems: 'flex-end', minHeight: 60, padding: 4}}>
                    <Pressable
                    onPress={action}
                    style={{
                        backgroundColor: color,
                        borderWidth: 0, paddingHorizontal: 40, paddingVertical: 8, borderRadius: 10
                    }}
                    >
                        <Text style={{color: 'white', ...fontMedium}}>{ actionLabel ? actionLabel : "Acessar"}</Text>
                    </Pressable>
                </View>
            }
        </View> 
    )
}



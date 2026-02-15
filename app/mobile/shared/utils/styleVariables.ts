import { ViewStyle } from "react-native";

// variables.ts
type Colors = Record<string, string>;
type Fonts = Record<string, string>;
type Shadows = Record<string, object>;

type CSSVariables = {
    colors: Colors;
    fonts: Fonts;
    shadows: Shadows;
};

const variables: CSSVariables = {
    colors: {
    primary: "#395b9c",
    "primary/80": "rgba(57, 91, 156, 0.8)",
    "primary/50": "rgba(57, 91, 156, 0.5)",
    "primary/20": "rgba(57, 91, 156, 0.2)",
    "primary/10": "rgba(57, 91, 156, 0.1)",
    "primary/5": "rgba(57, 91, 156, 0.05)",
    
    secondary: "#374151",
    "secondary/80": "rgba(55, 65, 81, 0.8)",
    "secondary/50": "rgba(55, 65, 81, 0.5)",
    "secondary/20": "rgba(55, 65, 81, 0.2)",
    "secondary/10": "rgba(55, 65, 81, 0.1)",
    "secondary/5": "rgba(55, 65, 81, 0.05)",
    
    contrast: "#f1c619",
    "contrast/80": "rgba(241, 198, 25, 0.8)",
    "contrast/50": "rgba(241, 198, 25, 0.5)",
    "contrast/20": "rgba(241, 198, 25, 0.2)",
    "contrast/10": "rgba(241, 198, 25, 0.1)",
    "contrast/5": "rgba(241, 198, 25, 0.05)",
    
    action: "#ffffff",
    "action/80": "rgba(255, 255, 255, 0.8)",
    "action/50": "rgba(255, 255, 255, 0.5)",
    "action/20": "rgba(255, 255, 255, 0.2)",
    "action/10": "rgba(255, 255, 255, 0.1)",
    "action/5": "rgba(255, 255, 255, 0.05)",
    
    items: "#f2f2f2",
    "items/80": "rgba(242, 242, 242, 0.8)",
    "items/50": "rgba(242, 242, 242, 0.5)",
    "items/20": "rgba(242, 242, 242, 0.2)",
    "items/10": "rgba(242, 242, 242, 0.1)",
    "items/5": "rgba(242, 242, 242, 0.05)",
    
    bg: "#ffffff",
    "bg/80": "rgba(229, 229, 229, 0.8)",
    "bg/50": "rgba(229, 229, 229, 0.5)",
    "bg/20": "rgba(229, 229, 229, 0.2)",
    "bg/10": "rgba(229, 229, 229, 0.1)",
    "bg/5": "rgba(229, 229, 229, 0.05)",
    
    error: "rgba(105, 31, 31, 1)",
    "error/80": "rgba(105, 31, 31, 0.8)",
    "error/50": "rgba(105, 31, 31, 0.5)",
    "error/20": "rgba(105, 31, 31, 0.2)",
    "error/10": "rgba(105, 31, 31, 0.1)",
    "error/5": "rgba(105, 31, 31, 0.05)",
    
    errorBackground: "rgba(235, 179, 179, 1)",
    "errorBackground/80": "rgba(235, 179, 179, 0.8)",
    "errorBackground/50": "rgba(235, 179, 179, 0.5)",
    "errorBackground/20": "rgba(235, 179, 179, 0.2)",
    "errorBackground/10": "rgba(235, 179, 179, 0.1)",
    "errorBackground/5": "rgba(235, 179, 179, 0.05)",
    
    primaryProfessor: "#b4524b",
    "primaryProfessor/80": "rgba(180, 82, 75, 0.8)",
    "primaryProfessor/50": "rgba(180, 82, 75, 0.5)",
    "primaryProfessor/20": "rgba(180, 82, 75, 0.2)",
    "primaryProfessor/10": "rgba(180, 82, 75, 0.1)",
    "primaryProfessor/5": "rgba(180, 82, 75, 0.05)",
    
    warning: "#bf6060",
    "warning/80": "rgba(191, 96, 96, 0.8)",
    "warning/50": "rgba(191, 96, 96, 0.5)",
    "warning/20": "rgba(191, 96, 96, 0.2)",
    "warning/10": "rgba(191, 96, 96, 0.1)",
    "warning/5": "rgba(191, 96, 96, 0.05)",
    
    done: "#72a672",
    "done/80": "rgba(114, 166, 114, 0.8)",
    "done/50": "rgba(114, 166, 114, 0.5)",
    "done/20": "rgba(114, 166, 114, 0.2)",
    "done/10": "rgba(114, 166, 114, 0.1)",
    "done/5": "rgba(114, 166, 114, 0.05)",
    
    pending: "#d9bf40",
    "pending/80": "rgba(217, 191, 64, 0.8)",
    "pending/50": "rgba(217, 191, 64, 0.5)",
    "pending/20": "rgba(217, 191, 64, 0.2)",
    "pending/10": "rgba(217, 191, 64, 0.1)",
    "pending/5": "rgba(217, 191, 64, 0.05)",
    
    pastelRed: "#bc6c6c",
    "pastelRed/80": "rgba(188, 108, 108, 0.8)",
    "pastelRed/50": "rgba(188, 108, 108, 0.5)",
    "pastelRed/35": "rgba(188, 108, 108, 0.35)",
    "pastelRed/20": "rgba(188, 108, 108, 0.2)",
    "pastelRed/10": "rgba(188, 108, 108, 0.1)",
    "pastelRed/5": "rgba(188, 108, 108, 0.05)",
    
    pastelBlue: "#5372b7",
    "pastelBlue/80": "rgba(83, 114, 183, 0.8)",
    "pastelBlue/50": "rgba(83, 114, 183, 0.5)",
    "pastelBlue/35": "rgba(83, 114, 183, 0.35)",
    "pastelBlue/20": "rgba(83, 114, 183, 0.2)",
    "pastelBlue/10": "rgba(83, 114, 183, 0.1)",
    "pastelBlue/5": "rgba(83, 114, 183, 0.05)",
    
    pastelPink: "#b265c5",
    "pastelPink/80": "rgba(178, 101, 197, 0.8)",
    "pastelPink/50": "rgba(178, 101, 197, 0.5)",
    "pastelPink/35": "rgba(178, 101, 197, 0.35)",
    "pastelPink/20": "rgba(178, 101, 197, 0.2)",
    "pastelPink/10": "rgba(178, 101, 197, 0.1)",
    "pastelPink/5": "rgba(178, 101, 197, 0.05)",
    
    pastelPurple: "#9d68bb",
    "pastelPurple/80": "rgba(157, 104, 187, 0.8)",
    "pastelPurple/50": "rgba(157, 104, 187, 0.5)",
    "pastelPurple/35": "rgba(157, 104, 187, 0.35)",
    "pastelPurple/20": "rgba(157, 104, 187, 0.2)",
    "pastelPurple/10": "rgba(157, 104, 187, 0.1)",
    "pastelPurple/5": "rgba(157, 104, 187, 0.05)",
    
    pastelGreen: "#4e9b4e",
    "pastelGreen/80": "rgba(78, 155, 78, 0.8)",
    "pastelGreen/50": "rgba(78, 155, 78, 0.5)",
    "pastelGreen/35": "rgba(78, 155, 78, 0.35)",
    "pastelGreen/20": "rgba(78, 155, 78, 0.2)",
    "pastelGreen/10": "rgba(78, 155, 78, 0.1)",
    "pastelGreen/5": "rgba(78, 155, 78, 0.05)",
    
    pastelYellow: "#d9b240",
    "pastelYellow/80": "rgba(217, 178, 64, 0.8)",
    "pastelYellow/50": "rgba(217, 178, 64, 0.5)",
    "pastelYellow/35": "rgba(217, 178, 64, 0.35)",
    "pastelYellow/20": "rgba(217, 178, 64, 0.2)",
    "pastelYellow/10": "rgba(217, 178, 64, 0.1)",
    "pastelYellow/5": "rgba(217, 178, 64, 0.05)",
    
    pastelOrange: "#d18c58",
    "pastelOrange/80": "rgba(209, 140, 88, 0.8)",
    "pastelOrange/50": "rgba(209, 140, 88, 0.5)",
    "pastelOrange/35": "rgba(209, 140, 88, 0.35)",
    "pastelOrange/20": "rgba(209, 140, 88, 0.2)",
    "pastelOrange/10": "rgba(209, 140, 88, 0.1)",
    "pastelOrange/5": "rgba(209, 140, 88, 0.05)",
    
    pastelCyan: "#66bfbf",
    "pastelCyan/80": "rgba(102, 191, 191, 0.8)",
    "pastelCyan/50": "rgba(102, 191, 191, 0.5)",
    "pastelCyan/35": "rgba(102, 191, 191, 0.35)",
    "pastelCyan/20": "rgba(102, 191, 191, 0.2)",
    "pastelCyan/10": "rgba(102, 191, 191, 0.1)",
    "pastelCyan/5": "rgba(102, 191, 191, 0.05)",
    
    pastelMint: "#6fcaa9",
    "pastelMint/80": "rgba(111, 202, 169, 0.8)",
    "pastelMint/50": "rgba(111, 202, 169, 0.5)",
    "pastelMint/35": "rgba(111, 202, 169, 0.35)",
    "pastelMint/20": "rgba(111, 202, 169, 0.2)",
    "pastelMint/10": "rgba(111, 202, 169, 0.1)",
    "pastelMint/5": "rgba(111, 202, 169, 0.05)",
    
    pastelPeach: "#e28e6b",
    "pastelPeach/80": "rgba(226, 142, 107, 0.8)",
    "pastelPeach/50": "rgba(226, 142, 107, 0.5)",
    "pastelPeach/35": "rgba(226, 142, 107, 0.35)",
    "pastelPeach/20": "rgba(226, 142, 107, 0.2)",
    "pastelPeach/10": "rgba(226, 142, 107, 0.1)",
    "pastelPeach/5": "rgba(226, 142, 107, 0.05)",
    
    pastelLavender: "#9981d8",
    "pastelLavender/80": "rgba(153, 129, 216, 0.8)",
    "pastelLavender/50": "rgba(153, 129, 216, 0.5)",
    "pastelLavender/35": "rgba(153, 129, 216, 0.35)",
    "pastelLavender/20": "rgba(153, 129, 216, 0.2)",
    "pastelLavender/10": "rgba(153, 129, 216, 0.1)",
    "pastelLavender/5": "rgba(153, 129, 216, 0.05)",
    
    defaultStroke: "#b3b3b3",
    "defaultStroke/80": "rgba(179, 179, 179, 0.8)",
    "defaultStroke/50": "rgba(179, 179, 179, 0.5)",
    "defaultStroke/20": "rgba(179, 179, 179, 0.2)",
    "defaultStroke/10": "rgba(179, 179, 179, 0.1)",
    "defaultStroke/5": "rgba(179, 179, 179, 0.05)",
    
    active: "#0d0d0d",
    "active/80": "rgba(13, 13, 13, 0.8)",
    "active/50": "rgba(13, 13, 13, 0.5)",
    "active/20": "rgba(13, 13, 13, 0.2)",
    "active/10": "rgba(13, 13, 13, 0.1)",
    "active/5": "rgba(13, 13, 13, 0.05)",
    
    textLight: "#ffffff",
    "textLight/80": "rgba(255, 255, 255, 0.8)",
    "textLight/50": "rgba(255, 255, 255, 0.5)",
    "textLight/20": "rgba(255, 255, 255, 0.2)",
    "textLight/10": "rgba(255, 255, 255, 0.1)",
    "textLight/5": "rgba(255, 255, 255, 0.05)",
    
    mute: "#4d4d4d",
    "mute/80": "rgba(77, 77, 77, 0.8)",
    "mute/50": "rgba(77, 77, 77, 0.5)",
    "mute/20": "rgba(77, 77, 77, 0.2)",
    "mute/10": "rgba(77, 77, 77, 0.1)",
    "mute/5": "rgba(77, 77, 77, 0.05)"
},
    fonts: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        roboto: "Roboto",
        inter: "Inter",
        interMedium: "Inter-Medium",
        interSemibold: "Inter-SemiBold",
        interBold: "Inter-Bold"
    },
    shadows: {
        basic: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 2
        },
        insetDefault: {
            shadowColor: "#666",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3
        }
    }
};

export const defaultShadow = {
    shadowColor: '#00000065',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1.5,
      
}

export const flexRow: ViewStyle = {
    display: 'flex', flexDirection: 'row'
}

export const flexCol: ViewStyle = {
    display: 'flex', flexDirection: 'column'
}

export const flexRowCenter: ViewStyle = {
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
}

export const fontNormal = { fontFamily: variables.fonts["inter"]}

export const fontMedium = { fontFamily: variables.fonts["interMedium"]}

export const fontSemiBold = { fontFamily: variables.fonts["interSemibold"]}

export const fontBold = { fontFamily: variables.fonts["interBold"]}

export default variables;
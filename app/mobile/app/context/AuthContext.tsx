import { loginAsync } from "@/shared/api/routes/Login"
import { LoginRequest, LoginResponse } from "@/shared/types/Application"
import { createContext, ReactNode, useContext, useState } from "react"
import * as SecureStorage from "expo-secure-store";


interface AuthContextType {
    accessToken: string | null
    login: (data: LoginRequest) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({children} : {children: ReactNode}) => {
    
    const [accessToken, setAccessToken] = useState<string | null>(SecureStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY || "accessToken"));


    const LogIn = async (data: LoginRequest) => {
        const response = await loginAsync(data);
        await SecureStorage.setItemAsync(process.env.EXPO_PUBLIC_TOKEN_KEY || "accessToken", response.accessToken);
        setAccessToken(SecureStorage.getItem(process.env.EXPO_PUBLIC_TOKEN_KEY || "accessToken"));
    }

    const LogOut = async () => {
        await SecureStorage.deleteItemAsync(process.env.EXPO_PUBLIC_TOKEN_KEY || "accessToken");
    }

    const value: AuthContextType = {
        accessToken: accessToken,
        login: LogIn,
        logout: LogOut,
    }

    return(
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext inside a provider");
    }

    return context;
}





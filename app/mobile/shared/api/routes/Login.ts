import { ErrorAuth, LoginRequest, LoginResponse } from "@/shared/types/Application";





export const loginAsync = async (data: LoginRequest): Promise<LoginResponse> => {

    // mock request

    if (data.login != "aluno@ads.fiponline.edu.br") {
        throw new ErrorAuth("loginError", "Email ou matrícula incorretos ou inexistentes", "LOGIN");
    }
    if (data.password != "fip2025") {
        throw new ErrorAuth("passwordError", "Senha incorreta", "PASSWORD");
    }

    return new Promise<LoginResponse>((resolve, reject) => {
        resolve({ accessToken: "Iwhb%5244$HJkjkjdjJjHHap", refreshToken: "!3hd$#6356BhjTt4$fQpqs#Plcnf34w" });
    });
}
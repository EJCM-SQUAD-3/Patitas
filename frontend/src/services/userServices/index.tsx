import api from "../api";

export interface loginData {
    email: string;
    password: string;
}

export interface signInData {
    name: string;
    cpf: string;
    email: string;
    password: string;
}

export default {
    async login (data: loginData) {
        try {
            const response = api.post("/login", data);
            console.log(response)
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async signIn (data: signInData) {
        try {
            const response = api.post("/user", data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
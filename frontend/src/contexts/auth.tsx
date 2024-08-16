import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useEffect } from 'react';


interface Data {
    signed: boolean;
    token: string;
    setToken: any;
}

export const AuthContext = createContext<Data>({} as Data);

const AuthProvider = (props: any) => {
    const [authorization, setAuthorization] = useState<string>('');
    const [checkLogin, setCheckLogin] = useState<boolean>(false);

    const userToken = async () => {
        let token = ' ';
        try {
            const value = await AsyncStorage.getItem('token');
            if (value != null) {
                token = 'Bearer '.concat(value);
                return token;
            }
        } catch (error) {
            console.log('No token provided');
        }
        return token;
    }

    function checkIsLoggedIn() {
        if (authorization) 
            setCheckLogin(true);
        else 
            setCheckLogin(false);
    }
    
    useEffect(() => {
        userToken().then(value => { setAuthorization(value) });
    }, []);

    useEffect(() => {
        checkIsLoggedIn();
    }, [authorization, checkLogin]);

    return (
        <AuthContext.Provider value={{ token: authorization, setToken: setAuthorization, signed: checkLogin }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
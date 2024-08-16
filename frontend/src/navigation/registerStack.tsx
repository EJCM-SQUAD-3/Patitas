import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login';
import ScreenLogo from '../pages/screenLogo';
import SelectUser from '../pages/selectUser';
import ScreenRegisterBuyer from '../pages/signIn';


const Stack = createNativeStackNavigator()

export default function RegisterStack () {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ScreenLogo' screenOptions={{
        headerShown: false,
      }}>
                <Stack.Screen name='ScreenLogo' component={ScreenLogo} />
                <Stack.Screen name='ScreenRegisterBuyer' component={ScreenRegisterBuyer} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='SelectUser' component={SelectUser} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
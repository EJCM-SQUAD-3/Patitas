import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import SelectUser from '../pages/selectUser'
import ScreenRegisterBuyer from '../pages/screenRegisterBuyer'
import Login from '../pages/login' 
export function Routes(){

    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName='SelectUser'  screenOptions={{
        headerShown: false,
      }}>
                <Stack.Screen name='SelectUser' component={SelectUser} />
                <Stack.Screen name='ScreenRegisterBuyer' component={ScreenRegisterBuyer} />
                <Stack.Screen name='Login' component={Login} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
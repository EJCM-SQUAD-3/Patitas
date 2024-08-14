import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
import SelectUser from '../pages/selectUser'
import ScreenRegisterBuyer from '../pages/screenRegisterBuyer'
import Login from '../pages/login' 
import Cart  from '../pages/cart'
import ScreenLogo from '../pages/screenLogo'
export function Routes(){

    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName='ScreenLogo'  screenOptions={{
        headerShown: false,
      }}>
                <Stack.Screen name='ScreenLogo' component={ScreenLogo} />
                <Stack.Screen name='SelectUser' component={SelectUser} />
                <Stack.Screen name='ScreenRegisterBuyer' component={ScreenRegisterBuyer} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Cart' component={Cart} />
                

            </Stack.Navigator>
        </NavigationContainer>
    )
}
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectUser from '../pages/selectUser';
import HomeBuyer from '../pages/homeBuyer';
import HomeSeller from '../pages/homeSeller';


const Stack = createNativeStackNavigator()

export default function HomeStack () {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SelectUser' screenOptions={{
        headerShown: false,
      }}>
                <Stack.Screen name='SelectUser' component={SelectUser} />
                <Stack.Screen name='CHome' component={HomeBuyer}/>
                <Stack.Screen name='SHome' component={HomeSeller} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
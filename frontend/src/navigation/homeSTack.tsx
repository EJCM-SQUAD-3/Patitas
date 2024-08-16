import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectUser from '../pages/selectUser';
import HomeBuyer from '../pages/homeBuyer';
import HomeSeller from '../pages/homeSeller';
import Cart from '../pages/cart';
import AdressRegister from '../pages/adressRegister';
import UserProfile from '../pages/userProfile';
import SellerChat from '../pages/sellerChat';
import SellerProfile from '../pages/sellerProfile';
import PurchaseCompleted from '../pages/purchaseCompleted';
import ProductPhoto from '../pages/productPhoto';
import userProfilePhoto from '../pages/userProfilePhoto';
import ProductRegistration from '../pages/productRegistration';


const Stack = createNativeStackNavigator()

export default function HomeStack () {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SelectUser' screenOptions={{
        headerShown: false,
      }}>
                <Stack.Screen name='SelectUser' component={SelectUser} />
                <Stack.Screen name='Home' component={HomeBuyer}/>
                <Stack.Screen name='Home/Vendedor' component={HomeSeller} />
                <Stack.Screen name='Cart' component={Cart} />
                <Stack.Screen name='AdressRegister' component={AdressRegister} />
                <Stack.Screen name='UserProfile' component={UserProfile} />
                <Stack.Screen name='SellerProfile' component={SellerProfile} />
                <Stack.Screen name='PurchaseCompleted' component={PurchaseCompleted} />
                <Stack.Screen name='ProductPhoto' component={ProductPhoto} />
                <Stack.Screen name='UserProfilePhoto' component={userProfilePhoto} />
                <Stack.Screen name='ProductRegitration' component={ProductRegistration} />
               
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}
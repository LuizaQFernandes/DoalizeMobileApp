import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Home from '../views/Home'
import Preload from '../views/Preload'
import Login from '../views/Login'
//import Signup from '../views/Signup'

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                             screenOptions={{headerShown:false}}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
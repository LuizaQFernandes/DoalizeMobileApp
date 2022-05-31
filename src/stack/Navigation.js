import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

import Home from '../views/Home'
import Preload from '../views/Preload'
import Login from '../views/Login'
import Cadastro from '../views/Cadastro'
import Campanha from '../views/Campanha'

//import Signup from '../views/Signup'

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PreLoad"
                             screenOptions={{headerShown:false}}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Campanha" component={Campanha} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
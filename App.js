import React from 'react'
import { Appearance } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
  } from '@expo-google-fonts/roboto';
import Navigation from './src/stack/Navigation'

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  if (!fontsLoaded) { return <AppLoading /> }
  else {
    return (
        <Navigation />
    )
  }
}